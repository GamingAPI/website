/* eslint-disable @next/next/no-img-element */
import { Grid, Typography } from '@mui/material';
import {MainMenu} from '../../../../components/MainMenu';
import { SideMenu } from '../../../../components/menus/platform/Rust';
import {TopMenu} from '../../../../components/menus/Public';

const Games: React.FunctionComponent<any> = () => {
  return (
    <MainMenu 
      sideMenu={<SideMenu/>}
      topMenu={<TopMenu/>}
      >
      <Grid container spacing={0} 
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}>
        <Grid item xs={12} height={300} width={"100%"} style={{  
          backgroundImage: "url(" + "/img/games/rust-background-1.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} />

        <Grid container item xs={6} style={{margin: "40px 0 40px 0"}}>
          <Grid item xs={12}>
            <Typography variant="h2">Rust</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>The only aim in Rust is to survive. <Typography display="inline" color="#bb5c55">Everything wants you to die</Typography> - the island’s wildlife and other inhabitants, the environment, other survivors. <Typography display="inline" color="#bb5c55">Do whatever it takes to last another night</Typography>...</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} height={733} width={"100%"} style={{  
          backgroundImage: "url(" + "/img/games/rust-background-2.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} />
      </Grid>

    </MainMenu>
  )
}

export default Games;