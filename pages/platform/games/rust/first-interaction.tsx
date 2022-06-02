import { Button, Grid, Typography,Paper, Tab, Box, ListItem, ListItemText} from '@mui/material';
import React from "react";
import {MainMenu} from '../../../../components/MainMenu';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { SideMenu } from '../../../../components/menus/platform/Rust';
import {TopMenu} from '../../../../components/menus/Public';

const Main: React.FunctionComponent<any> = () => {
  const [frameworkValue, setFrameworkValue] = React.useState('1');
  const [languageValue, setLanguageValue] = React.useState('1');
  const handleNewLanguageChange = (event: React.SyntheticEvent, newLanguageValue: string) => {
    setLanguageValue(newLanguageValue);
  };
  const handleFrameworkChange = (event: React.SyntheticEvent, newFrameworkValue: string) => {
    setFrameworkValue(newFrameworkValue);
  };
  return (
    <MainMenu
      sideMenu={<SideMenu/>}
      topMenu={<TopMenu/>}
    >
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={7} container spacing={6}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h4" className="title">
                Add your server
              </Typography>
              <Typography variant="overline" className="title">
                The GamingAPI network needs to know about your sever before allowing you to interact with it.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" className="title">
                Setup your game server
              </Typography>
              <Typography variant="overline" className="title">
                Your game server, regardless of how you set it up, needs to interact with the GaminAPI network. To do this use one of the following setups:
              </Typography>
              <TabContext value={frameworkValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleFrameworkChange} aria-label="lab API tabs example">
                    <Tab label="uMod local server" value="1" />
                    <Tab label="uMod docker" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Typography variant="overline" className="title">
                    This guide help you setup your local rust to interact with the GamingAPI network.
                  </Typography>
                  <ol>
                    <li>Install uMod by following one of the many guides: https://www.corrosionhour.com/install-umod-rust-server/</li>
                    <li>Download our <a href="https://github.com/GamingEventAPI/umod-rust-server-plugin">GamingAPI plugin</a></li>
                    <li>Install the plugin: https://www.corrosionhour.com/install-umod-plugins-rust-server/</li>
                    <li>Download the <a href="https://github.com/GamingEventAPI/umod-rust-server-extension">GamingAPI extensions</a></li>
                    <li>Place the extensions under &lt;server-identity&gt;/RustDedicated_Data/Managed</li>
                    <li>Restart the server</li>
                  </ol>
                </TabPanel>
                <TabPanel value="2">
                  <Typography variant="overline" className="title">
                    This guide help you setup your docker container running the Rust server to interact with the GamingAPI network.

                    We highly recommend you use our own docker image: https://github.com/GamingEventAPI/rust-docker-image
                  </Typography>
                  <ol>
                    <li>Install uMod by following one of the many guides: https://www.corrosionhour.com/install-umod-rust-server/</li>
                  </ol>
                </TabPanel>
              </TabContext>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="h4" className="title">
                Interact with your sever
              </Typography>
              <Typography variant="overline" className="title">
                Use your favorite language to interact with the game server over the GamingAPI network
              </Typography>
              <TabContext value={languageValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleNewLanguageChange} aria-label="lab API tabs example">
                    <Tab label="TypeScript" value="1" />
                    <Tab label="C#/.NET" value="2" />
                    <Tab label="Go" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <SyntaxHighlighter language="typescript" style={dracula}>
                  {`import { NatsAsyncApiClient } from '@eventgamingapi/rust';

const client = new NatsAsyncApiClient();
await client.connect();
await client.subscribeToRustServerStarted((message) => {
console.log(\`Server have started\`)
});`}
                  </SyntaxHighlighter>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="h4" className="title">
                Explore the API
              </Typography>
              <Typography variant="overline" className="title">
                There are many events to interact with, explore them here.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainMenu>
  )
}

export default Main;
