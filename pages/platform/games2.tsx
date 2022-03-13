/* eslint-disable @next/next/no-img-element */
import { Grid, List, Stack, Typography } from '@mui/material';
import {MainMenu} from '../../../components/MainMenu';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { typography } from '@mui/system';
import {TopMenu} from '../../../components/menus/Platform';
import { signIn, useSession } from 'next-auth/react';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Games: React.FunctionComponent<any> = () => {
	const { data: session } = useSession()
  if (session) {
    return (
      <MainMenu 
        topMenu={<TopMenu/>}
        hideSideMenu={true}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          style={{
            backgroundColor:"#333"
          }}
        >
          <a href="/platform/rust">
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
          </a>
        </Stack>
      </MainMenu>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Games;