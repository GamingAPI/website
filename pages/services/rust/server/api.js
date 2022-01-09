import {default as AsyncapiRustServer} from '../../../../../definitions/rust_server.json';
import { parse } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu} from '../../../../components/MainMenu';
import { AsyncApiComponentWP } from "@asyncapi/react-component";
import { Link, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function RustServerAPI({ asyncapi, error }) {
	const config = {
	  schemaID: 'custom-spec',
	  show: {
      operations: true,
      errors: true,
	  },
	};
  return (
    <MainMenu
      sideMenu={
        <List>
          <Link href="/services/rust/server/flow">
            <ListItem button key={"Rust flow"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Rust flow"} />
            </ListItem>
          </Link>
          <Link href="/services/rust/server/api">
            <ListItem button key={"Rust API"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Rust API"} />
            </ListItem>
          </Link>
        </List>
      }
    >
      <AsyncApiComponentWP schema={asyncapi} config={config} error={JSON.parse(error)} />
    </MainMenu>
  )
}


// This function gets called at build time
export async function getStaticProps() {
  let document = null;
  let error = null;
  try{
    // validate and parse
    const parsed = await parse(JSON.stringify(AsyncapiRustServer), {path: '../definitions/'});
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