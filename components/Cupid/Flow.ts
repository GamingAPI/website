import { Elements } from "react-flow-renderer";

export function getReactFlowData(metrics: any): Elements {
  let i = 1;
  let edgId = 1;
  const nodes : any = [];
  const visitedServices : any = [];
  for (const [server, relations] of metrics) {
    const url = server.split(',');
    for (const [channel, operations] of relations) {
      const serverChannelId = `server${i}-channel-${channel}`;
      const node = { id: serverChannelId, type: 'channelNode', data: { channel: channel, description: `Through the server ${url}`, vertical: true }, position: { x: 0, y: 0 }, style: {
        background: '#D6D5E6',
        color: '#333',
        border: '2px solid #222138',
        width: 350,
      }};
      nodes.push(node);
      for (const [subscriber, metadata] of operations.sub) {
        const service = subscriber.replace(/\s/g, '');
        getNode(service, visitedServices, subscriber, nodes);
        const edge = { id: `edge${edgId}`, source: `${service}`, target: serverChannelId, type: 'edgeType', arrowHeadType: 'arrowclosed' };
        nodes.push(edge);
        edgId++;
      }

      for (const [publisher, metadata] of operations.pub) {
        const service = publisher.replace(/\s/g, '');
        getNode(service, visitedServices, publisher, nodes);
        const edge = { id: `edge${edgId}`, source: serverChannelId, target: `${service}`, type: 'edgeType', arrowHeadType: 'arrowclosed' };
        nodes.push(edge);
        edgId++;
      }
    }
    i++;
  }
  return nodes;
}

function getNode(service: any, visitedServices: any, operator: any, nodes: any) {
  if (!visitedServices.includes(service)) {
    visitedServices.push(service);
    let node = { id: `${service}`, type:'externalApplicationNode', data: { title: `${operator}`, path: '', vertical: true }, position: { x: 0, y: 0 } };
    nodes.push(node);
  }
}