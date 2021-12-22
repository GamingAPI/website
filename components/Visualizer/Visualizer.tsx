import React from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { FlowDiagram } from './FlowDiagram';
interface VisualizerProps {
  asyncapi: AsyncAPIDocument | null
}

export const Visualizer: React.FunctionComponent<VisualizerProps> = ({asyncapi}) => {
  return (
    asyncapi && (<FlowDiagram parsedSpec={asyncapi} /> )
  );
};
