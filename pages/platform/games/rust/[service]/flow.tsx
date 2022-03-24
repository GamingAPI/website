import {default as AsyncapiRustServer} from '../../../../../../definitions/rust_server.json';
import {default as AsyncapiRustProcessor} from '../../../../../../definitions/rust_processor.json';
import {default as AsyncapiRustPublicAPI} from '../../../../../../definitions/rust_public_api.json';
import { parse, AsyncAPIDocument } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu, Visualizer} from '../../../../../components';
import { Grid } from '@mui/material';
import { SideMenu } from '../../../../../components/menus/platform/Rust';
import { TopMenu } from '../../../../../components/menus/Public';

const groupedApplications: any = {
  "server": { document: AsyncapiRustServer, description: 'Test' }, 
  "processor": { document: AsyncapiRustProcessor, description: 'Test' }, 
  "public": { document: AsyncapiRustPublicAPI, description: 'Test' }
}

const FlowPage: React.FunctionComponent<any> = ({ asyncapi, externalApplications, error }) => {
  return (
    <MainMenu
      sideMenu={<SideMenu/>}
      topMenu={<TopMenu/>}
    >
      <Grid container spacing={3} height={"100vh"}>
        <Grid item xs={12}>
          <Visualizer asyncapi={AsyncAPIDocument.parse(asyncapi)} externalApplications={JSON.parse(externalApplications)} />
        </Grid>
      </Grid>
    </MainMenu>
  )
}
export default FlowPage;

export async function getStaticPaths() {
  const paths = Object.keys(groupedApplications).map((key) => `/platform/games/rust/${key}/flow`);
  return {
    paths,
    fallback: true,
  }
}
// This function gets called at build time
export async function getStaticProps(context: any) {
  const service = context.params.service;
  const externalApps = [];
  let application;
  for (const [name, app] of Object.entries(groupedApplications)) {
    if(name === service){
      application = (app as any).document;
    } else {
      externalApps.push((app as any).document);
    }
  }
  let document = null;
  let error = null;
  // validate and parse
  const parsed = await parse(JSON.stringify(application), {path: '../definitions/'});
  const rel: any = {};
  for (const [path, _] of Object.entries(parsed.channels())) {
    rel[path] = [];
  }

  for (const app of externalApps) {
    const parsedApp = await parse(JSON.stringify(app), {path: '../definitions/'});
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
      error
    },
  }
}