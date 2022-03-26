import AccountTreeIcon from '@mui/icons-material/AccountTree';
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
          <Typography variant="h6" color="inherit">Games</Typography>
          <Typography variant="caption" color="inherit">Select your game and figure out how you can set it up</Typography>
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
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="h6" color="inherit">Platform flows</Typography>
          <Typography variant="caption" color="inherit">See how the entire system flows together</Typography>
        </React.Fragment>
      }
      placement="right"
    >
      <Link href='/platform/flows'>
        <ListItem button>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary={'Platform flows'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
	</List>
  );
}
