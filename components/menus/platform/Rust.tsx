import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArticleIcon from '@mui/icons-material/Article';
import ModeIcon from '@mui/icons-material/Mode';
import { Link, List, ListItem, ListItemText, ListItemIcon, Typography, Divider } from '@mui/material';
import * as React from 'react';
import { HtmlTooltip } from '../../HtmlTooltip';
import StorageIcon from '@mui/icons-material/Storage';
export const TopMenu: React.FunctionComponent<any> = () => {
  return (
    <>
      <Link href="/platform/profile" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Profile
      </Link>
      
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography variant="caption" color="inherit">Switch to other games to know more about how to interact with the GaminAPI network and the game server</Typography>
          </React.Fragment>
        }
        placement="bottom"
      >
        <Link href="/platform/games" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
        Games
        </Link>
      </HtmlTooltip>
      
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography variant="caption" color="inherit">Interested in how other services are interacting together to form the GamingAPI network? Then this is for you!</Typography>
          </React.Fragment>
        }
        placement="bottom"
      >
        <Link href="/backend" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
        Backend
        </Link>
      </HtmlTooltip>
    </>
  );
}



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
      <Link href='/platform/rust'>
        <ListItem button>
          <ListItemIcon>
            <ModeIcon />
          </ListItemIcon>
          <ListItemText primary={'Getting started'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
    
    <Divider />
    <ListItem>
      <ListItemText primary={'Documentation'} secondary={'Give you different kind of documentation to explain how the system works'}/>
    </ListItem>
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="h6" color="inherit">Flows</Typography>
          <Typography variant="caption" color="inherit">Visualize where you are getting your data from and what you interact with.</Typography>
        </React.Fragment>
      }
      placement="right"
    >
      <Link href='/platform/rust/flows'>
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
          <Typography variant="h6" color="inherit">API</Typography>
          <Typography variant="caption" color="inherit">Read the API documentation for how you can interact with the GamingAPI network</Typography>
        </React.Fragment>
      }
      placement="right"
    >
      <Link href='/platform/rust/api'>
        <ListItem button>
          <ListItemIcon>
            <SummarizeIcon />
          </ListItemIcon>
          <ListItemText primary={'API'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
    
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="h6" color="inherit">AsyncAPI document</Typography>
          <Typography variant="caption" color="inherit">Get the raw AsyncAPI document which defines how you interact with the GamingAPI network</Typography>
        </React.Fragment>
      }
      placement="right"
    >
      <Link href='/platform/rust/asyncapi'>
        <ListItem button>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary={'AsyncAPI document'} />
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
      <Link href='/backend/rust/'>
        <ListItem button>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary={'Rust Backend'} />
        </ListItem>
      </Link>
    </HtmlTooltip>
	</List>
  );
}
