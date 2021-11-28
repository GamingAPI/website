import {default as AsyncapiRustServer} from '../../../definitions/Rust_server.json';
import { parse } from "@asyncapi/parser";
import "@asyncapi/react-component/styles/default.min.css";
import MainMenu from '../../components/MainMenu';
import ReactFlow from 'react-flow-renderer';
import cupid from '@asyncapi/cupid';

export default function ServiceOverview({ elements, error }) {
  console.log(elements.relation);
  const asd1 = [
    {
      id: 'Server1',
      data: { label: 'test.nats.org:{port},nats' },
      position: { x: 250, y: 5 }
    },
    {
      id: 'Rustserver',
      data: { label: 'Rust server' },
      position: { x: 100, y: 10 }
    },
    {
      id: 'edge1',
      source: 'Rustserver',
      target: 'Server1',
      animated: true,
      label: 'v0/rust/servers/{server_id}/events/wiped',
      type: 'edgeType',
      arrowHeadType: 'arrowclosed'
    },
    {
      id: 'edge2',
      source: 'Rustserver',
      target: 'Server1',
      animated: true,
      label: 'v0/rust/servers/{server_id}/events/started',
      type: 'edgeType',
      arrowHeadType: 'arrowclosed'
    }
  ]
  
  return (
    <MainMenu>
      <div style={{ height: 300 }}>
        <ReactFlow elements={asd1} />
      </div>
    </MainMenu>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  let elements = null;
  let error = null;
  try{
    // validate and 
    const parsed = await parse(JSON.stringify(AsyncapiRustServer), {path: '../definitions/'});
    console.log(parsed);
    const relations = await cupid.getRelations([JSON.stringify(parsed.json())], {syntax: 'reactFlow'});
    console.log(relations);
    if(relations){
      elements = JSON.stringify({relations: relations});
    }
  }catch(e){
    console.log(e);
    error = JSON.stringify(e);
  }
  return {
    props: {
      elements,
      error
    },
  }
}