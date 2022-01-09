import React from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { FlowDiagram } from './FlowDiagram';
interface VisualizerProps {
  asyncapi: AsyncAPIDocument,
  externalApplications: any[]
}

export const Visualizer: React.FunctionComponent<VisualizerProps> = ({asyncapi, externalApplications}) => {
  return (
    asyncapi && (<FlowDiagram parsedSpec={asyncapi} externalApplications={externalApplications} /> )
  );
};
