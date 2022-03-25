import { NextPage } from 'next';
import { Grid, Typography} from '@mui/material';
import {MainMenu} from '../components/MainMenu';
import { TopMenu } from '../components/menus/Public';

const Page: NextPage<any> = () => {
  return (
    <MainMenu
    topMenu={<TopMenu/>}
      hideSideMenu={true}
    >
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <Typography variant="h6" align="center">404 - Page Not Found</Typography>
        </Grid>
      </Grid>
    </MainMenu>
  );
}

export default Page;
