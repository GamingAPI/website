import { parse, AsyncAPIDocument } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu, SystemFlowDiagram} from '../../../../components';
import { Grid } from '@mui/material';
import { SideMenu } from '../../../../components/menus/platform/Rust';
import {TopMenu} from '../../../../components/menus/Public';
import { RustServices } from "../../../../components/RustServices";
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
  let parsedDocuments: any = [];
  let error = null;
  // validate and parse
  const documents = [Object.values(RustServices).map((app: any) => app.document)].flat();
  for (const doc of documents) {
    const parsedDoc = await parse(JSON.stringify(doc));
    parsedDocuments.push(parsedDoc);
  }
  parsedDocuments = parsedDocuments.map((doc: AsyncAPIDocument) => AsyncAPIDocument.stringify(doc));
  return {
    props: {
      documents: parsedDocuments,
      error
    },
  }
}