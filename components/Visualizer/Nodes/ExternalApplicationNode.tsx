import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Chip, Typography, Grid, Button } from '@mui/material';
interface IData {
  title: string,
  path: string
  vertical: boolean
}

interface ExternalApplicationNodeProps {
  data: IData
}

export const ExternalApplicationNode: React.FunctionComponent<ExternalApplicationNodeProps> = ({
  data: { title, path, vertical = false } = {},
}) => {
  return (
    <Grid container spacing={2} bgcolor={"white"}>
      <Handle
        type="target"
        position={vertical ? Position.Top : Position.Left}
        style={{ background: 'gray' }}
      />
      <Grid item xs={vertical ? 12 : 3}>
        <Typography sx={{ height: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          subscribes to
        </Typography>
      </Grid>
      <Grid item xs={vertical ? 12 : 6} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">
            External application
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            {title || ''}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button href={path} variant="contained">Go to application</Button>
        </Grid>
      </Grid>
      
      <Grid item xs={vertical ? 12 : 3}>
        <Typography sx={{ height: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          publish to
        </Typography>
      </Grid>
      <Handle 
        type="source" 
        position={vertical ? Position.Bottom : Position.Right} 
        style={{ background: 'gray' }} />
    </Grid>
  );
};

export default ExternalApplicationNode;