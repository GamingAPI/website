import { getProviders, signIn } from "next-auth/react";
import { TopMenu } from '../../components/menus/Public';
import React from "react";
import { Button, Grid, Typography} from '@mui/material';
import {MainMenu} from '../../components/MainMenu';

const SignIn: React.FunctionComponent<any> = ({providers}) => {
  return (
    <MainMenu
      topMenu={<TopMenu/>}
      hideSideMenu={true}
    >
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        {Object.values(providers).map((provider: any) => (
          <Grid item xs={12} md={3} key={provider.name}>
            <Button style={{width: '100%', height: '100%', position: 'relative'}} onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/platform/profile' })} variant="outlined">Sign in with {provider.name}</Button>
          </Grid>
        ))}
      </Grid>
    </MainMenu>
  )
}
export default SignIn;
// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

