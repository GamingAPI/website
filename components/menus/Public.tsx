import { Link, Typography, Grid } from '@mui/material';
import { HtmlTooltip } from '../HtmlTooltip';
import * as React from 'react';
export const TopMenu: React.FunctionComponent<any> = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="caption" color="inherit">Want to know more about the backend and how the services work together?</Typography>
            </React.Fragment>
          }
          placement="bottom"
        >
          <Link href="/backend" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
          Home
          </Link>
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="caption" color="inherit">Login to access the platform that enables you to get started!</Typography>
            </React.Fragment>
          }
          placement="bottom"
        >
          <Link href="/platform/login" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
          Developer platform
          </Link>
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="caption" color="inherit">Why should you care about this project?</Typography>
            </React.Fragment>
          }
          placement="bottom"
        >
          <Link href="/platform/login" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
          Why?
          </Link>
        </HtmlTooltip>
      </Grid>
      <Grid item xs={2}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="caption" color="inherit">Login</Typography>
            </React.Fragment>
          }
          placement="bottom"
        >
          <Link href="/platform/login" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
          Login
          </Link>
        </HtmlTooltip>
      </Grid>
    </Grid>
  );
}
