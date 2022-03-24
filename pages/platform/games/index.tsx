/* eslint-disable @next/next/no-img-element */
import { Grid, Link, List, Stack, Typography } from '@mui/material';
import {MainMenu} from '../../../components/MainMenu';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { TopMenu } from '../../../components/menus/Public';

import {SideMenu} from '../../../components/menus/platform/index';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Games: React.FunctionComponent<any> = () => {
  return (
    <MainMenu 
      topMenu={<TopMenu/>}
      sideMenu={<SideMenu/>}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Link href="/platform/games/rust">
          <Item style={{padding: 0, width: 400}}>
            <Grid container spacing={0} height={"100vh"} style={{  
                backgroundImage: "url(" + "/img/games/rust.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <Grid item xs={12}>
                <img src={'/img/games/rust-logo.png'} alt={'Rust logo'} style={{width:'300px'}}/>
              </Grid>
            </Grid>
          </Item>
        </Link>
      </Stack>
    </MainMenu>
  )
}

export default Games;