import {default as AsyncapiRustServer} from '../../../../../definitions/rust_server.json';
import {default as AsyncapiRustProcessor} from '../../../../../definitions/rust_processor.json';
import { parse, AsyncAPIDocument } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu, Visualizer} from '../../../../components/';
import { Link, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { getRelations } from '@asyncapi/cupid';

export default function RustServerAPI({ asyncapi, error }) {
  return (
    <MainMenu
     sideMenu={
      <List>
      <Link href="/services/rust/server/">
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
      <Grid container spacing={3} height={"100vh"}>
        <Grid item xs={12}>
          TEST
        </Grid>
        <Grid item xs={12} height={"500px"}>
          <Visualizer asyncapi={new AsyncAPIDocument(JSON.parse(asyncapi))} />
        </Grid>
      </Grid>
    </MainMenu>
  )
}


// This function gets called at build time
export async function getStaticProps() {
  let document = null;
  let error = null;
  // validate and parse
  const parsed = await parse(JSON.stringify(AsyncapiRustServer), {path: '../definitions/'});
  const parsed2 = await parse(JSON.stringify(AsyncapiRustProcessor), {path: '../definitions/'});
  const rel = {};
  for (const [path, _] of Object.entries(parsed.channels())) {
    rel[path] = [];
  }
  for (const [path, _] of Object.entries(parsed2.channels())) {
    if(rel[path] !== undefined){
      rel[path].push(parsed2.info().title());
    }
  }
  console.log(rel);
  // Circular references are not supported. See https://github.com/asyncapi/parser-js/issues/293
  document = JSON.stringify(parsed.json());

  return {
    props: {
      asyncapi: document,
      error
    },
  }
}