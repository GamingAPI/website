import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';

function RustMenu() {
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

export default RustMenu;