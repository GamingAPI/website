import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { AsyncAPIDocument } from '@asyncapi/parser';
import ReactMarkdown from 'react-markdown';
import Grid from '@mui/material/Grid';
import { Chip, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface IData {
  spec: AsyncAPIDocument
}

interface ApplicationNodeProps {
  data: IData
}

const buildNodeData = (spec: AsyncAPIDocument) => {
  const servers = spec.servers();

  const mappedServers = Object.keys(servers).reduce((newMappedServers: any[], serverKey) => {
    const server = servers[String(serverKey)];

    newMappedServers.push({
      name: serverKey,
      url: server.url(),
      description: server.description(),
      protocol: server.protocol(),
      protocolVersion: server.protocolVersion(),
    });
    return newMappedServers;
  }, []);

  const specInfo = spec.info();

  return {
    defaultContentType: spec.defaultContentType(),
    description: specInfo.description(),
    title: specInfo.title(),
    version: specInfo.version(),
    license: {
      name: specInfo.license() && specInfo.license().name(),
      url: specInfo.license() && specInfo.license().url(),
    },
    // @ts-ignore
    externalDocs: spec.externalDocs() && spec.externalDocs().url(),
    servers: mappedServers,
  };
};

export const ApplicationNode: React.FunctionComponent<ApplicationNodeProps> = ({
  data: { spec } = {},
}) => {
  const { description, title, version, license, externalDocs, servers, defaultContentType } = buildNodeData(spec as AsyncAPIDocument);

  return (
    <Grid container spacing={2} bgcolor={"white"}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: 'gray' }}
      />
      <Grid item xs={1}>
        <Typography sx={{ height: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          subscribes to
        </Typography>
      </Grid>
      <Grid item xs={10} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">{title}<Chip label={`v${version}`}/></Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Servers</Typography>
        </Grid>
        {servers.map((server) => {
          return (
          <Grid key={server.name} item xs={12} container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">{server.name}<Chip label={server.protocolVersion
                  ? `${server.protocol} ${server.protocolVersion}`
                  : server.protocol} variant="outlined" /></Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography> url: {server.url}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><ReactMarkdown>{server.description}</ReactMarkdown></Typography>
            </Grid>
          </Grid>
          );
        })}
      </Grid>
      
      <Grid item xs={1}>
        <Typography sx={{ height: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          publish to
        </Typography>
      </Grid>
      <Handle 
        type="source" 
        position={Position.Right} 
        style={{ background: 'gray' }} />
    </Grid>
  );
};

export default ApplicationNode;