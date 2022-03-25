
import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import getBackgroundColor from '../utils/random-background-color';
import { Chip, Typography, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';
interface IData {
  channel: string
  description: string
  vertical: boolean
}

interface PublishNodeProps {
  data: IData
}

export const PublishNode: React.FunctionComponent<PublishNodeProps> = ({
  data: { channel, description, vertical = false },
}) => {
  return (
    <Grid container spacing={2} bgcolor={"white"}>
      <Handle
        type="target"
        position={vertical ? Position.Top : Position.Left}
        style={{ background: 'gray' }}
      />
      <Grid item xs={10} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" align='center'>{channel}</Typography>
        </Grid>
        {description && (
          <Grid item xs={12}>
            <Typography variant="body1">
              <ReactMarkdown>{description || ''}</ReactMarkdown>
            </Typography>
          </Grid>
        )}
      </Grid>
      <Handle 
        type="source" 
        position={vertical ? Position.Bottom : Position.Right} 
        style={{ background: 'gray' }} />
    </Grid>
  );
};

export default PublishNode;