/* eslint-disable @next/next/no-img-element */
import { Grid, List, Stack, Typography } from '@mui/material';
import {MainMenu} from '../../../components/MainMenu';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import RustMenu from '../../../components/pages/services/rust/menu';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Services() {
  return (
    <MainMenu sideMenu={<RustMenu/>}>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
        style={{
          backgroundColor:"#333"
        }}
      >
        <a href="./processor/flow">
          <Item style={{padding: 0, width: 400}}>
            <Grid container spacing={0} height={"100vh"} style={{  
                backgroundImage: "url(" + "/img/games/rust.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <Grid item xs={12}>
                <Typography variant='h4'>The processor</Typography>
              </Grid>
            </Grid>
          </Item>
        </a>
        <a href="./server/flow">
          <Item style={{padding: 0, width: 400}}>
            <Grid container spacing={0} height={"100vh"} style={{  
                backgroundImage: "url(" + "/img/games/rust.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <Grid item xs={12}>
                <Typography variant='h4'>The rust server</Typography>
              </Grid>
            </Grid>
          </Item>
        </a>
      </Stack>
    </MainMenu>
  )
}

export default Services;