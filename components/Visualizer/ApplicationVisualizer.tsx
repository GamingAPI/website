import React from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { ApplicationFocusView } from '@lagoni/edavisualiser';
interface VisualizerProps {
  asyncapi: AsyncAPIDocument,
  externalApplications: any[]
}

export const Visualizer: React.FunctionComponent<VisualizerProps> = ({asyncapi, externalApplications}) => {
  return (
    asyncapi &&
    <ApplicationFocusView asyncapi={{document: asyncapi}} />
  )
};
