import React from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { ApplicationFocusView } from '@lagoni/edavisualiser';
import '@lagoni/edavisualiser/styles/default.css';

interface VisualizerProps {
  asyncapi: AsyncAPIDocument,
  externalApplications: any[]
}

export const Visualizer: React.FunctionComponent<VisualizerProps> = ({asyncapi, externalApplications}) => {
  if (typeof navigator === 'undefined') return null;
  return (
    asyncapi &&
    <ApplicationFocusView asyncapi={{document: asyncapi}} />
  )
};
