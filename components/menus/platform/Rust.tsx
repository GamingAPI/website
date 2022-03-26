import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ModeIcon from '@mui/icons-material/Mode';
import { Link, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import * as React from 'react';
import { HtmlTooltip } from '../../HtmlTooltip';
import StorageIcon from '@mui/icons-material/Storage';

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
      <Link href='/platform/games/rust/getting-started'>
        <ListItem button>
          <ListItemIcon>
            <ModeIcon />
          </ListItemIcon>
          <ListItemText primary={'Getting started'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
    
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="h6" color="inherit">Flows</Typography>
          <Typography variant="caption" color="inherit">Visualize where you are getting your data from and what you interact with.</Typography>
        </React.Fragment>
      }
      placement="right"
    >
      <Link href='/platform/games/rust/flows'>
        <ListItem button>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary={'Flows'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
    
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="caption" color="inherit">Want to know more how the events reaches your application?</Typography>
        </React.Fragment>
      }
      placement="right"
    >
      <Link href='/platform/games/rust/services'>
        <ListItem button>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary={'Rust services'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
	</List>
  );
}
