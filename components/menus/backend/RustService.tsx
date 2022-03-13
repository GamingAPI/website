import { Link, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
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
      <Link href="/services/rust/services">
        <ListItem button key={"Rust services"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Rust services"} />
        </ListItem>
      </Link>
      <Link href="/services/rust/flows">
        <ListItem button key={"Message flow"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Rust flow"} />
        </ListItem>
      </Link>
    </List>
  )
}