import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls as FlowControls, useStoreActions, useStoreState, Background, useZoomPanHelper, BackgroundVariant } from 'react-flow-renderer';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { Controls } from './Controls';
import nodeTypes from './Nodes';
import { getElementsFromAsyncAPISpec } from './utils/node-factory';
import { calculateNodesForDynamicLayout } from './utils/node-calculator';

interface FlowDiagramProps {
  parsedSpec: AsyncAPIDocument;
  relations: [];
}
interface AutoLayoutProps {
  elementsToRender: any;
}

const AutoLayout: React.FunctionComponent<AutoLayoutProps> = ({ elementsToRender }) => {
  const nodeStates = useStoreState((store) => store.nodes);
  const nodeEdges = useStoreState((store) => store.edges);
  const setElements = useStoreActions((actions) => actions.setElements);
  const { fitView } = useZoomPanHelper();
  const nodesAndEdges = [...nodeStates, ...nodeEdges];

  const rerender = () => {
    const calculatedNodes = calculateNodesForDynamicLayout(nodeStates);
    setElements([...calculatedNodes, ...nodeEdges]);
    fitView();
  };

  useEffect(() => {
    if (elementsToRender.length === nodesAndEdges.length) {
      // stop overlap no nodes when re-render, recalculate where they should go
      const nodesWithOrginalPosition = nodeStates.filter(node => node.__rf.position.x === 0 && node.__rf.position.y === 0);
      if (nodesWithOrginalPosition.length > 1) {
        setTimeout(() => {
          rerender();
        }, 1);
      }
    }
  }, [nodeStates]);

  return null;
};

export const FlowDiagram: React.FunctionComponent<FlowDiagramProps> = ({ parsedSpec, relations }) => {
  const [loaded, setLoaded] = useState(false);
  const title = parsedSpec.info().title();

  const elements = getElementsFromAsyncAPISpec(parsedSpec);

  const handleLoaded = (reactFlowInstance: any) => {
    setLoaded(true);
    reactFlowInstance.fitView();
  };

  return (
    <ReactFlow nodeTypes={nodeTypes} elements={elements} minZoom={0.1} onLoad={handleLoaded}>
      <Background color="#d1d1d3" variant={BackgroundVariant.Dots} gap={20} size={1} className="bg-gray-200" />
      {loaded && <AutoLayout elementsToRender={elements} />}
      <Controls />
      <div className="-mt-20">
        <FlowControls style={{ bottom: '105px' }} />
      </div>
    </ReactFlow>
  );
};
