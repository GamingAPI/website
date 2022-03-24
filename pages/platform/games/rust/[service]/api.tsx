import {default as AsyncapiRustServer} from '../../../../../../definitions/rust_server.json';
import {default as AsyncapiRustProcessor} from '../../../../../../definitions/rust_processor.json';
import {default as AsyncapiRustPublicAPI} from '../../../../../../definitions/rust_public_api.json';
import { parse, AsyncAPIDocument} from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu} from '../../../../../components/MainMenu';
import { AsyncApiComponentWP } from "@asyncapi/react-component";
import { SideMenu } from '../../../../../components/menus/platform/rust/Services';
import { TopMenu } from '../../../../../components/menus/Public';

const groupedApplications: any = {
  "server": AsyncapiRustServer, 
  "processor": AsyncapiRustProcessor, 
  "public": AsyncapiRustPublicAPI
}

export async function getStaticPaths() {
  const paths = Object.keys(groupedApplications).map((key) => `/platform/games/rust/${key}/api`);
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
  return (
    <MainMenu
      sideMenu={<SideMenu service={service}/>}
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