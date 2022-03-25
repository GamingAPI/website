import { parse, AsyncAPIDocument, parseFromUrl} from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu} from '../../../../../components/MainMenu';
import { AsyncApiComponentWP } from "@asyncapi/react-component";
import { SideMenu } from '../../../../../components/menus/platform/rust/Services';
import { TopMenu } from '../../../../../components/menus/Public';
import { RustServices } from "../../../../../components/RustServices";
import path from "path";
var env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
export async function getStaticPaths() {
  const paths = Object.keys(RustServices).map((key) => `/platform/games/rust/${key}/api`);
  return {
    paths,
    fallback: true,
  }
}
const ApiPage: React.FunctionComponent<any> = ({ asyncapi, service, error }) => {
	const config = {
	  schemaID: 'custom-spec',
	  show: {
      operations: true,
      errors: true,
	  },
	};
  let flowComponent;
  if(error || asyncapi === undefined) {
    flowComponent = <h1>Could not show API document</h1>
  } else {
    flowComponent = <AsyncApiComponentWP schema={AsyncAPIDocument.parse(asyncapi)} config={config} error={JSON.parse(error)} />;
  }
  return (
    <MainMenu
      sideMenu={<SideMenu service={service}/>}
      topMenu={<TopMenu/>}
    >
      {flowComponent}
    </MainMenu>
  )
}
export default ApiPage;

// This function gets called at build time
export async function getStaticProps(context: any) {
  const service = context.params.service;
  if(service === undefined || RustServices[service] === undefined) return {props: {error: 'Could not find service'}};
  const application = RustServices[service];
  let document = null;
  let error = null;
  try{
    // validate and parse
    const parsed = await parse(application);
    document = AsyncAPIDocument.stringify(parsed);
  }catch(e){
    error = JSON.stringify(e);
    console.error(e);
  }
  return {
    props: {
      asyncapi: document,
      service,
      error
    },
  }
}