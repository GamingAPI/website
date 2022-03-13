import {default as AsyncapiRustServer} from '../../../../../definitions/rust_server.json';
import {default as AsyncapiRustProcessor} from '../../../../../definitions/rust_processor.json';
import {default as AsyncapiRustPublicAPI} from '../../../../../definitions/rust_public_api.json';
import { parse } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu} from '../../../../components/MainMenu';
import { AsyncApiComponentWP } from "@asyncapi/react-component";
import { SideMenu, TopMenu } from '../../../../components/menus/backend/RustService';

export const RustGroupedApplications = {
  "server": AsyncapiRustServer, 
  "processor": AsyncapiRustProcessor, 
  "public": AsyncapiRustPublicAPI
}

export async function getStaticPaths() {
  return {
    paths: [
      '/backend/rust/server/api',
      '/backend/rust/processor/api',
      '/backend/rust/public/api',
    ],
    fallback: true,
  }
}
const ApiPage: React.FunctionComponent<any> = ({ asyncapi, error }) => {
	const config = {
	  schemaID: 'custom-spec',
	  show: {
      operations: true,
      errors: true,
	  },
	};
  return (
    <MainMenu
      sideMenu={<SideMenu/>}
      topMenu={<TopMenu/>}
    >
      <AsyncApiComponentWP schema={asyncapi} config={config} error={JSON.parse(error)} />
    </MainMenu>
  )
}
export default ApiPage;

// This function gets called at build time
export async function getStaticProps(context: any) {
  const service = context.params.service;
  const application = groupedApplications[service];
  let document = null;
  let error = null;
  try{
    // validate and parse
    const parsed = await parse(JSON.stringify(application), {path: '../definitions/'});
    // Circular references are not supported. See https://github.com/asyncapi/parser-js/issues/293
    document = JSON.stringify(parsed.json());
  }catch(e){
    error = JSON.stringify(e);
    console.error(e);
  }
  return {
    props: {
      asyncapi: document,
      error
    },
  }
}