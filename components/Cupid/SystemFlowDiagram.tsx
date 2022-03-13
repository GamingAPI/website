import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls as FlowControls, Background, BackgroundVariant, isNode, Position, MiniMap } from 'react-flow-renderer';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { getRelations } from './Relations';
import { getReactFlowData } from './Flow';
import dagre from 'dagre';
import nodeTypes from '../Visualizer/Nodes';
import ELK from 'elkjs/lib/elk.bundled.js';
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

// In order to keep this example simple the node width and height are hardcoded.
// In a real world app you would use the correct width and height values of
// const nodes = useStoreState(state => state.nodes) and then node.__rf.width, node.__rf.height

const nodeWidth = 350;
const nodeHeight = 400;

const getLayoutedElements = (elements: any, direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach((el:any) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  return elements.map((el: any) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = isHorizontal ? Position.Left : Position.Top;
      el.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

      // unfortunately we need this little hack to pass a slightly different position
      // to notify react flow about the change. Moreover we are shifting the dagre node position
      // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
      el.position = {
        x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    }

    return el;
  });
};

const DEFAULT_WIDTH = 350
const DEFAULT_HEIGHT = 400
const elk = new ELK({
  defaultLayoutOptions: {
    'elk.algorithm': 'mrtree',
    'elk.direction': 'RIGHT',
    'elk.spacing.nodeNode': '75',
    'elk.layered.spacing.nodeNodeBetweenLayers': '75'
  }
})

const createGraphLayout = async (elements: any): Promise<any> => {
  const nodes: any[] = []
  const edges: any[] = []

  elements.forEach((el: any) => {
    if (isNode(el)) {
      nodes.push({
        id: el.id,
        width: el.__rf?.width ?? DEFAULT_WIDTH,
        height: el.__rf?.height ?? DEFAULT_HEIGHT
      })
    } else {
      edges.push({
        id: el.id,
        target: el.target,
        source: el.source
      })
    }
  })

  const newGraph = await elk.layout({
    id: 'root',
    children: nodes,
    edges: edges
  })
  return elements.map((el: any) => {
    if (isNode(el)) {
      const node = newGraph?.children?.find((n: any) => n.id === el.id)
      if (node?.x && node?.y && node?.width && node?.height) {
        el.position = {
          x: node.x - node.width / 2 + Math.random() / 1000,
          y: node.y - node.height / 2
        }
      }
    }
    return el
  })
}

interface SystemFlowDiagramProps {
  parsedSpecs: AsyncAPIDocument[];
}

export const SystemFlowDiagram: React.FunctionComponent<SystemFlowDiagramProps> = ({ parsedSpecs }) => {
  const [loaded, setLoaded] = useState(false);
  const [elements, setElements] = useState([]);
  const metrics = getRelations(parsedSpecs);
  const rawElements = getReactFlowData(metrics);

  console.log(elements);
  const handleLoaded = async (reactFlowInstance: any) => {
    const layoutedElements = await createGraphLayout(rawElements);  
    setElements(layoutedElements);
    setLoaded(true);
    reactFlowInstance.fitView();
  };

  return (
    <ReactFlow nodeTypes={nodeTypes} elements={elements} minZoom={0.1} onLoad={handleLoaded}>
      <Background color="#d1d1d3" variant={BackgroundVariant.Dots} gap={20} size={1} className="bg-gray-200" />
      <MiniMap />
    </ReactFlow>
  );
};
