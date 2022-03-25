import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArticleIcon from '@mui/icons-material/Article';
import ModeIcon from '@mui/icons-material/Mode';
import { Link, List, ListItem, ListItemText, ListItemIcon, Typography, Divider } from '@mui/material';
import * as React from 'react';
import { HtmlTooltip } from '../../../HtmlTooltip';
import StorageIcon from '@mui/icons-material/Storage';

export const SideMenu: React.FunctionComponent<any> = ({service}) => {
  const serviceMenuItems = 
	<>
    <Divider />
    <ListItem>
    <ListItemText primary={"serviceName"} secondary={"serviceDescription"}/>
    </ListItem>
    
		<HtmlTooltip
		title={
			<React.Fragment>
			<Typography variant="h6" color="inherit">API</Typography>
			<Typography variant="caption" color="inherit">Read the API documentation for how you can interact with the GamingAPI network</Typography>
			</React.Fragment>
		}
		placement="right"
		>
		<Link href={`/platform/games/rust/${service}/api`}>
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
		<Link href={`/platform/games/rust/${service}/asyncapi`}>
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
			<Typography variant="h6" color="inherit">Flows</Typography>
			<Typography variant="caption" color="inherit">Visualize where you are getting your data from and what you interact with.</Typography>
			</React.Fragment>
		}
		placement="right"
		>
		<Link href={`/platform/games/rust/${service}/flows`}>
			<ListItem button>
			<ListItemIcon>
				<AccountTreeIcon />
			</ListItemIcon>
			<ListItemText primary={'Flows'} />
			</ListItem>
		</Link>
		</HtmlTooltip>
	</>
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
			<ListItemText primary={'Rust Services'} />
			</ListItem>
		</Link>
		</HtmlTooltip>
		{serviceMenuItems}
	</List>
  );
}
