import { parse, AsyncAPIDocument } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu, Visualizer} from '../../../../../components';
import { Grid } from '@mui/material';
import { SideMenu } from '../../../../../components/menus/platform/rust/Services';
import { TopMenu } from '../../../../../components/menus/Public';
import { RustServices } from "../../../../../components/RustServices";

const FlowPage: React.FunctionComponent<any> = ({ asyncapi, externalApplications, error, service, name, description }) => {
  let flowComponent;
  if(error || asyncapi === undefined) {
    flowComponent=<h1>Could not show flow</h1>
  } else {
    flowComponent = <Grid container spacing={3} height={"100vh"}>
      <Grid item xs={12}>
        <Visualizer asyncapi={AsyncAPIDocument.parse(asyncapi)} externalApplications={JSON.parse(externalApplications)} />
      </Grid>
    </Grid>
  }
  return (
    <MainMenu
      sideMenu={<SideMenu service={service} name={name} description={description} />}
      topMenu={<TopMenu/>}
    >
      {flowComponent}
    </MainMenu>
  )
}
export default FlowPage;

export async function getStaticPaths() {
  const paths = Object.keys(RustServices).map((key) => `/platform/games/rust/${key}/flow`);
  return {
    paths,
    fallback: true,
  }
}
// This function gets called at build time
export async function getStaticProps(context: any) {
  const service = context.params.service;
  if(service === undefined || RustServices[service] === undefined) return {props: {error: 'Could not find service'}};
  const externalApps: any[] = [];
  let serviceApp: any;
  for (const [name, app] of Object.entries(RustServices)) {
    if(name === service){
      serviceApp = app;
    } else {
      externalApps.push(app);
    }
  }
  let document = null;
  let error = null;
  // validate and parse
  const parsed = await parse(serviceApp.document);
  const rel: any = {};
  for (const [path, _] of Object.entries(parsed.channels())) {
    rel[path] = [];
  }

  for (const app of externalApps) {
    const parsedApp = await parse(app.document);
    for (const [path, channel] of Object.entries(parsedApp.channels())) {
      if(rel[path] !== undefined){
        if(channel.hasPublish()) {
          rel[path].push({title: parsedApp.info().title(), path: '../processor', operation: 'publish'});
        }
        if(channel.hasSubscribe()) {
          rel[path].push({title: parsedApp.info().title(), path: '../processor', operation: 'subscribe'});
        }
      }
    }
  }

  const externalApplications: any = {};
  for (const [channel, applications] of Object.entries(rel)) {
    for (const application of applications as any) {
      const appTitle = `${application.title}-${application.operation}`
      if(!externalApplications[appTitle]) {
        externalApplications[appTitle] = {
          title: application.title,
          path: application.path,
          operation: application.operation,
          channels: [channel]
        }
      } else {
        externalApplications[appTitle].channels.push(channel);
      } 
    }
  }
  document = AsyncAPIDocument.stringify(parsed);

  return {
    props: {
      externalApplications: JSON.stringify(externalApplications),
      asyncapi: document,
      service,
      name: serviceApp.name,
      description: serviceApp.description,
      error
    },
  }
}