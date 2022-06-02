/* eslint-disable @next/next/no-img-element */
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
        <Grid item xs={11} md={7} container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h2" className="title">
              Users
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className="title">
               The documentation are tuned towards two types of users, to fine tune the documentation and how to use it.
            </Typography>
          </Grid>
          
        </Grid>
        <Grid item xs={12} md={8} container spacing={6}>
          <Grid item xs={6}>
            <Typography variant="h2">
              The integrator
            </Typography>
            <Typography variant="subtitle1">
              You want to integrate a game, plugin or other way of acting as a game server.
            </Typography>
            <img src="/img/technology-4256272_640.jpg" alt="The integrator" style={{width:"80%", height:"230px"}}/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" className="title">
              The consumer
            </Typography>
            <Typography variant="subtitle1" className="title">
              You want to interact with the game servers.
            </Typography>
            <Image src="/img/businessman-2876075_640.jpg" alt="The consumer" width={300} height={300}/>
          </Grid>
        </Grid>
      </Grid>
    </MainMenu>
  )
}

export default Main;
