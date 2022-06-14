import { parse, AsyncAPIDocument, parseFromUrl } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu} from '../../../../../components/MainMenu';
import { SideMenu } from '../../../../../components/menus/platform/rust/Services';
import { TopMenu } from '../../../../../components/menus/Public';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { RustServices } from "../../../../../components/RustServices";

const RustServerAPI: React.FunctionComponent<any> = ({ asyncapi, service, name, description }) => {
  return (
    <MainMenu
      sideMenu={<SideMenu service={service} name={name} description={description}/>}
      topMenu={<TopMenu/>}
    >
      <SyntaxHighlighter language="json" style={dracula}>
        {JSON.stringify(JSON.parse(asyncapi), null, 4) || '{}'}
      </SyntaxHighlighter>
    </MainMenu>
  )
}
export default RustServerAPI;

// This function gets called at build time
export async function getStaticProps(context: any) {
  const service = context.params.service;
  const application = RustServices[service] as any;
  let document = null;
  let error = null;
  try{
    // validate and parse
    const parsed = await parse(application.document);
    document = AsyncAPIDocument.stringify(parsed);
  }catch(e){
    error = JSON.stringify(e);
    console.error(e);
  }
  return {
    props: {
      asyncapi: document,
      service,
      name: application.name,
      description: application.description,
      error
    },
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(RustServices).map((key) => `/platform/games/rust/${key}/asyncapi`);
  return {
    paths,
    fallback: true,
  }
}