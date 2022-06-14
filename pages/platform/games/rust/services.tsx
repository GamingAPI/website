/* eslint-disable @next/next/no-img-element */
import { Grid, List, Stack, Typography } from '@mui/material';
import {MainMenu} from '../../../../components/MainMenu';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { SideMenu } from '../../../../components/menus/platform/Rust';
import {TopMenu} from '../../../../components/menus/Public';
import { RustServices } from "../../../../components/RustServices";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Services() {

  const serviceComponents = Object.entries(RustServices).map(([serviceName, service]) => {
    return <a key={`service-${serviceName}`} href={`./${serviceName}/flow`}>
      <Item style={{padding: 0, width: 400}}>
        <Grid container spacing={0} height={"100vh"} style={{  
            backgroundImage: "url(" + "/img/games/rust.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <Grid item xs={12}>
            <Typography variant='h4'>{service.name}</Typography>
          </Grid>
        </Grid>
      </Item>
    </a>
  });
  return (
    <MainMenu 
      sideMenu={<SideMenu/>}
      topMenu={<TopMenu/>}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        {serviceComponents}
      </Stack>
    </MainMenu>
  )
}

export default Services;