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
  startOpenSideMenu?: boolean;
  noSideMenu?: boolean;
}

export const MainMenu: React.FunctionComponent<MainMenuProps> = (props) => {
  let {
    children, 
    sideMenu, 
    topMenu,
    hideSideMenu = false,
    startOpenSideMenu = false
  } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(startOpenSideMenu);
  if(!topMenu) {
    topMenu = (<><Link href="/" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
    About
  </Link>
  <Link href="/services/flows" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
    Services
  </Link>
  <Link href="/games" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
    Games
  </Link>
  <Link href="/tools" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
    Tools
  </Link></>);
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>Gaming API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:"#fff"}}>
        <div style={{width:"100%", height:"60px", position: "relative", top: "0", backgroundColor:"#dfab04"}}><Typography align="center" variant="h5">WIP</Typography><Typography align="center" variant="subtitle1">Project is still work in progress and not ready to use</Typography></div>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...((open || hideSideMenu) && { display: 'none' }) }}
          >
            <MenuIcon color="primary" />
          </IconButton>
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
        <main>
          {children}
        </main>
        <footer>
          <Typography variant="overline" className="title">
            <a href='https://eventstack.tech'>EventStack</a>
          </Typography>
        </footer>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Main>
    </Box>
  );
}