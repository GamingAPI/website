import React from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { SystemView } from '@lagoni/edavisualiser';
interface SystemVisualizerProps {
  applications: {
    asyncapi: AsyncAPIDocument
  }[]
}

export const SystemVisualizer: React.FunctionComponent<SystemVisualizerProps> = ({applications}) => {
  const aps = applications.map((app) => {return {asyncapi:{document: app.asyncapi}};})
  return (
    <SystemView applications={aps} />
  )
};
