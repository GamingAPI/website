import { Button, Grid, Typography, Paper} from '@mui/material';
import React from "react";
import {MainMenu} from '../../components/MainMenu';
import Image from 'next/image';
import { TopMenu } from '../../components/menus/Public';
import {SideMenu} from '../../components/menus/platform/index';

const Main: React.FunctionComponent<any> = () => {
  return (
    <MainMenu 
      sideMenu={<SideMenu/>}
      topMenu={<TopMenu/>}>
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={7} container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h2" className="title">
              What makes a good developer platform?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className="title">
               No idea, but let&apos;s find out! There are probably more information here then you need, help us find out what makes sense and which does not.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} container spacing={6}>
          <Grid item xs={12} md={6} container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h2" className="title">
                System flows
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="title">
                See how the entire GamingAPI system flows together.
              </Typography>
            </Grid>
            <Grid item xs={12} style={{height:"300px"}}>
              <Button variant="outlined" href="/platform/flows" style={{float:"right"}}>see system flows</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image
                alt='Rust'
                src='/img/backend-flows.png'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} container spacing={6}>
          <Grid item xs={12} md={6} container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h2" className="title">
                Game flows
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="title">
                See how events flow for a specific game. Similar to system flow, but specifically shown for a game&apos;s perspective.
              </Typography>
            </Grid>
            <Grid item xs={12} style={{height:"300px"}}>
              <Button variant="outlined" href="/platform/games/rust/flows" style={{float:"right"}}>see game flows</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image
                alt='Rust'
                src='/img/game-flows.png'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} container spacing={6}>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h2" className="title">
                Application flows
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="title">
                See how events flow from the perspective of a single application/service, to see who it interacts with.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" href="/platform/games/rust/server/flow" style={{float:"right"}}>see application flows</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{height: '220px'}}>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image
                alt='Rust'
                src='/img/service-flows.png'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </MainMenu>
  )
}

export default Main;
