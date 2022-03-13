import {default as AsyncapiRustServer} from '../../../../definitions/rust_server.json';
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu} from '../../../../components/MainMenu';
import {SideMenu, TopMenu} from '../../../../components/menus/platform/Rust';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const RustServerAPI: React.FunctionComponent<any> = ({ asyncapi, error }) => {
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
      <SyntaxHighlighter language="json" style={dracula}>
        {asyncapi}
      </SyntaxHighlighter>
    </MainMenu>
  )
}
export default RustServerAPI;

export async function getStaticProps() {
  return {
    props: {
      asyncapi: JSON.stringify(AsyncapiRustServer, null, 4)
    },
  }
}