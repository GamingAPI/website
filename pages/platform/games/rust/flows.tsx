import {default as AsyncapiRustServer} from '../../../../definitions/rust_server.json';
import {default as AsyncapiRustProcessor} from '../../../../definitions/rust_processor.json';
import {default as AsyncapiRustPublicAPI} from '../../../../definitions/rust_public_api.json';
import { parse, AsyncAPIDocument } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu, SystemFlowDiagram} from '../../../../components';
import { Grid } from '@mui/material';
import { SideMenu } from '../../../../components/menus/platform/Rust';
import {TopMenu} from '../../../../components/menus/Public';
interface SystemFlowProps{
  documents: any;
  error: any;
}
export default function SystemFlow({ documents, error } : SystemFlowProps) {
  const parsedDocuments = documents.map((document: any) => {
    return AsyncAPIDocument.parse(document);
  });
  return (
    <MainMenu
     sideMenu={<SideMenu/>}
     topMenu={<TopMenu/>}
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
  let documents: any = [];
  let error = null;
  // validate and parse
  const parsed = await parse(JSON.stringify(AsyncapiRustServer), {path: '../definitions/'});
  const parsed2 = await parse(JSON.stringify(AsyncapiRustProcessor), {path: '../definitions/'});
  const parsed3 = await parse(JSON.stringify(AsyncapiRustPublicAPI), {path: '../definitions/'});
  documents = documents.map((doc: AsyncAPIDocument) => AsyncAPIDocument.stringify(doc));
  return {
    props: {
      documents: documents,
      error
    },
  }
}