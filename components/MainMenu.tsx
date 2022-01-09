import * as React from 'react';
import Head from 'next/head'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from '@mui/material';

const drawerWidth = 240;

const Main = styled(
    'main', 
    { shouldForwardProp: (prop) => prop !== 'open' }
  )<any>(
  (({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }))
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<any>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface MainMenuProps {
  sideMenu?: any;
  topMenu?: any;
  hideSideMenu?: boolean;
}

export const MainMenu: React.FunctionComponent<MainMenuProps> = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {children, sideMenu, topMenu, hideSideMenu = false} = props;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>Event gaming API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:"#333"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...((open || hideSideMenu) && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link variant="h6">
            About
          </Link>
          <Link href="/services" variant="h6">
            Services
          </Link>
          <Link href="/games" variant="h6">
            Games
          </Link>
          <Link href="/tools" variant="h6">
            Tools
          </Link>
          {topMenu}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {sideMenu}
        <Divider />
      </Drawer>
      <Main open={open} style={{padding:0}}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}