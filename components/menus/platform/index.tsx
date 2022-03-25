import ModeIcon from '@mui/icons-material/Mode';
import { Link, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import * as React from 'react';
import { HtmlTooltip } from '../../HtmlTooltip';

export const SideMenu: React.FunctionComponent<any> = () => {
  return (
	<List>
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="h6" color="inherit">Setup</Typography>
          <Typography variant="caption" color="inherit">Learn how to add your Rust server to the GamingAPI network and how to interact with it</Typography>
        </React.Fragment>
      }
      placement="right"
    >
      <Link href='/platform/games'>
        <ListItem button>
          <ListItemIcon>
            <ModeIcon />
          </ListItemIcon>
          <ListItemText primary={'Games'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
	</List>
  );
}
