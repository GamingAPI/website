import React from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { SystemView } from '@lagoni/edavisualiser';
import '@lagoni/edavisualiser/styles/default.css';

interface SystemVisualizerProps {
  applications: {
    asyncapi: AsyncAPIDocument,
    path_to_service: string
  }[]
}

export const SystemVisualizer: React.FunctionComponent<SystemVisualizerProps> = ({applications}) => {
  const aps = applications.map((app) => {return {
    asyncapi: {
      document: app.asyncapi,
      topExtended: (
        <div className="flex justify-between mb-4">
          <a
            className="leading-6 text-gray-900 uppercase text-xs font-light"
            href={app.path_to_service}
          >
            <button
              style={{
                backgroundColor: 'rgba(110, 231, 183, 1)',
                padding: '0 10px',
              }}
            >
              Focus application
            </button>
          </a>
        </div>
      )
    }
  };})
  return (
    <SystemView applications={aps} />
  )
};
