import { Button, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import { MainMenu } from '../../components/MainMenu';
import { useSession, signIn } from 'next-auth/react';
import { TopMenu } from '../../components/menus/Public';

const Main: React.FunctionComponent<any> = () => {
	const { data: session } = useSession();
	if (session && session.user) {
		return (
			<MainMenu topMenu={<TopMenu />} hideSideMenu={true}>
				<Grid
					container
					spacing={10}
					justifyContent='center'
					alignItems='center'
				>
					<Grid item xs={12} md={7} container spacing={6}>
						<Grid item xs={12}>
							<Typography variant='h2' className='title'>
								{session.user.email}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</MainMenu>
		);
	}
	return (
		<>
			Not signed in <br />
			<button>Sign in</button>
		</>
	);
};

export default Main;
