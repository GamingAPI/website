/* eslint-disable @next/next/no-img-element */
import { Grid, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import {MainMenu} from '../../../components/MainMenu';
import RustMenu from '../../../components/pages/services/rust/menu';

function Games() {
  return (
    <MainMenu sideMenu={<RustMenu/>}>
      <Grid container spacing={0} 
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}>
        <Grid item xs={12} height={300} width={"100%"} style={{  
          backgroundImage: "url(" + "/img/games/rust.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} />

        <Grid container item xs={6}>
          <Grid item xs={12}>
            <Typography variant="h2">Rust</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night...</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>With rust you will be able to  </Typography>
          </Grid>
          <Grid container item xs={12}
            justifyContent="center"
            alignItems="center"
            direction={{ xs: 'column', sm: 'row' }}>
            <Grid item xs={12} md={4}>
              <Typography>Hej</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>Hej</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>Hej</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>Hej</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainMenu>
  )
}

export default Games;