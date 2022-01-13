import {default as AsyncapiRustServer} from '../../../definitions/rust_server.json';
import {default as AsyncapiRustProcessor} from '../../../definitions/rust_processor.json';
import { parse, AsyncAPIDocument } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu, SystemFlowDiagram} from '../../components';
import { Link, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function SystemFlow({ documents, error }) {
  const parsedDocuments = JSON.parse(documents).map((document) => {
    return new AsyncAPIDocument(document);
  });
  return (
    <MainMenu
     sideMenu={
      <List>
        <Link href="/services/flows">
          <ListItem button key={"Flows"}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Flows"} />
          </ListItem>
        </Link>
      </List>
     }
    >
      <Grid container spacing={3} height={"100vh"} width={"100%"}>
        <Grid item xs={12}>
          <SystemFlowDiagram parsedSpecs={parsedDocuments} />
        </Grid>
      </Grid>
    </MainMenu>
  )
}


// This function gets called at build time
export async function getStaticProps() {
  let documents = [];
  let error = null;
  // validate and parse
  const parsed = await parse(JSON.stringify(AsyncapiRustServer), {path: '../definitions/'});
  const parsed2 = await parse(JSON.stringify(AsyncapiRustProcessor), {path: '../definitions/'});
  // Circular references are not supported. See https://github.com/asyncapi/parser-js/issues/293
  documents.push(parsed.json());
  documents.push(parsed2.json());

  return {
    props: {
      documents: JSON.stringify(documents),
      error
    },
  }
}