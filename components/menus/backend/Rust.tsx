import { Link, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
export const TopMenu: React.FunctionComponent<any> = () => {
  return (
    <>
      <Link href="/backend" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Backend
      </Link>
      <Link href="/backend/games" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Games
      </Link>
      <Link href="/platform/login" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Platform
      </Link>
    </>
  );
}

export const SideMenu: React.FunctionComponent<any> = () => {
  return (
    <List>
      <Link href="/backend/rust">
        <ListItem>
          <ListItemText primary={"Rust"} />
        </ListItem>
      </Link>
      <Link href="/backend/rust/flows">
        <ListItem button>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary={"Flow"} />
        </ListItem>
      </Link>
      <Divider />
      <ListItem>
        <ListItemText primary={'Services'} secondary={'These are the different applications that give you access to the data'}/>
      </ListItem>
      <Link href="/backend/rust/server">
        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary={"Game server"} />
        </ListItem>
      </Link>
      <Link href="/backend/rust/processor">
        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary={"Processor"} />
        </ListItem>
      </Link>
      <Link href="/backend/rust/public">
        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary={"Public application"} />
        </ListItem>
      </Link>
    </List>
  )
}