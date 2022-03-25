import { parse, AsyncAPIDocument, parseFromUrl } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu} from '../../../../../components/MainMenu';
import { SideMenu } from '../../../../../components/menus/platform/Rust';
import { TopMenu } from '../../../../../components/menus/Public';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { RustServices } from "../../../../../components/RustServices";
import path from "path";

var env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';

const RustServerAPI: React.FunctionComponent<any> = ({ asyncapi, error }) => {
  return (
    <MainMenu
      sideMenu={<SideMenu/>}
      topMenu={<TopMenu/>}
    >
      <SyntaxHighlighter language="json" style={dracula}>
        {asyncapi || '{}'}
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
    const parsed = await parse(application);
    document = AsyncAPIDocument.stringify(parsed);
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

export async function getStaticPaths() {
  const paths = Object.keys(RustServices).map((key) => `/platform/games/rust/${key}/asyncapi`);
  return {
    paths,
    fallback: true,
  }
}