import { Link, Typography, Grid, ListItem, ListItemIcon } from '@mui/material';
import { HtmlTooltip } from '../HtmlTooltip';
import * as React from 'react';
import { useSession, signIn } from 'next-auth/react';

export const TopMenu: React.FunctionComponent<any> = () => {
	const { data: session } = useSession();
  let profileMenu = <Grid item xs={2}>
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="caption" color="inherit">Login</Typography>
        </React.Fragment>
      }
      placement="bottom"
    >
      <Link onClick={() => signIn()} style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Login
      </Link>
    </HtmlTooltip>
  </Grid>;

  if (session) {
    profileMenu = <Grid item xs={2}>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography variant="caption" color="inherit">Login</Typography>
          </React.Fragment>
        }
        placement="bottom"
      >
        <Link href="/profile" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
        profile
        </Link>
      </HtmlTooltip>
      <Link href="/profile/logout" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      logout
      </Link>
    </Grid>
  }
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
          <Link href="/" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
          Home
          </Link>
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="caption" color="inherit">The developer platform that will help you find resources and information about the GamingAPI.</Typography>
            </React.Fragment>
          }
          placement="bottom"
        >
          <Link href="/platform" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
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
          <Link href="/vision" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
          Vision
          </Link>
        </HtmlTooltip>
      </Grid>
      {profileMenu}
    </Grid>
  );
}
