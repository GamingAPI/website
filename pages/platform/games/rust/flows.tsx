import { parse, AsyncAPIDocument } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import {MainMenu, SystemVisualizer} from '../../../../components';
import { Grid } from '@mui/material';
import { SideMenu } from '../../../../components/menus/platform/Rust';
import {TopMenu} from '../../../../components/menus/Public';
import { RustServices } from "../../../../components/RustServices";
interface SystemFlowProps{
  services: any;
  error: any;
}
export default function SystemFlow({ services, error } : SystemFlowProps) {  
  const parsedDocuments = Object.values(services).map((service: any) => {
    const parsedDoc = AsyncAPIDocument.parse(service.parsedDoc);
    return {
      asyncapi: parsedDoc,
      path_to_service: service.path_to_service
    }; 
  });
  return (
    <MainMenu
     sideMenu={<SideMenu/>}
     topMenu={<TopMenu/>}
    >
      <Grid container spacing={3} height={"100vh"} width={"100%"}>
        <Grid item xs={12}>
          <SystemVisualizer applications={parsedDocuments} />
        </Grid>
      </Grid>
    </MainMenu>
  )
}


// This function gets called at build time
export async function getStaticProps() {
  let error = null;
  const services: any = { }
  
  for (const [serviceName, service] of Object.entries(RustServices)) {
    const parsedDoc = await parse(JSON.stringify(service.document));
    services[serviceName] = {
      ...service,
      parsedDoc: AsyncAPIDocument.stringify(parsedDoc)
    }
  }
  return {
    props: {
      services,
      error
    },
  }
}