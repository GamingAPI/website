import { Button, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import { MainMenu } from '../components/MainMenu';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';
import { Masonry } from '@mui/lab';
import { TopMenu } from '../components/menus/Public';
import Link from 'next/link';

const Main: React.FunctionComponent<any> = () => {
	return (
		<MainMenu hideSideMenu={true} topMenu={<TopMenu />}>
			<Grid container spacing={10} justifyContent='center' alignItems='center'>

				<Grid item xs={12} md={7} container spacing={6}>
					<Grid item xs={12} md={6} container spacing={4}>
						<Grid item xs={12}>
							<Typography variant='h2' className='title'>
								Well defined API
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h6' className='title'>
								Interacting with in-game events as easy as installing a library.
								Interact either through a REST interface, or through events over
								NATS.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Button href="/platform/games" variant='outlined' style={{ float: 'right' }}>
								Find your API
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6}>
						<div
							style={{ width: '100%', height: '100%', position: 'relative' }}
						>
							<Image
								alt='Rust'
								src='/img/api.png'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</Grid>
				</Grid>
				<Grid item xs={12} md={7} container spacing={2}>
					<Grid item xs={12}>
						<Typography variant='h2' className='title'>
							Generated libraries for easy integration
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h6' className='title'>
							We have a different clients ready to use with only a few lines of
							code needed.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<SyntaxHighlighter language='typescript' style={dracula}>
							{`import { NatsAsyncApiClient } from '@eventgamingapi/rust';

const client = new NatsAsyncApiClient();
await client.connect();
await client.subscribeToRustServerStarted((message) => {
  console.log(\`Server have started\`)
});`}
						</SyntaxHighlighter>
					</Grid>
					<Grid
						item
						container
						spacing={10}
						justifyContent='center'
						alignItems='center'
						xs={12}
					>
						<Grid item xs={2}>
							<Button variant='outlined' disabled={true}>TypeScript/JS</Button>
						</Grid>
						<Grid item xs={2}>
							<Button variant='outlined' disabled={true}>.NET</Button>
						</Grid>
						<Grid item xs={2}>
							<Button variant='outlined' disabled={true}>Go</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={7} container spacing={6}>
					<Grid item xs={12}>
						<Typography variant='h2' className='title'>
							Supported games
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
							<Link href="/platform/games/rust">
								<Paper key='rustgame' sx={{ height: 300 }} >
									<div
										style={{
											width: '100%',
											height: '100%',
											position: 'relative',
										}}
									>
										<Image
											alt='Rust'
											src='/img/games/23bbfde495802aab16bba40542f610cc.png'
											layout='fill'
											objectFit='contain'
										/>
									</div>
								</Paper>
							</Link>
							<Paper key='TBD1' sx={{ minHeight: 100 }}>
								<Typography variant='h2' className='title' align='center'>
									TBD
								</Typography>
							</Paper>
							<Paper key='TBD2' sx={{ minHeight: 150 }}>
								<Typography variant='h2' className='title' align='center'>
									TBD
								</Typography>
							</Paper>
							<Paper key='TBD3' sx={{ minHeight: 40 }}>
								<Typography variant='h2' className='title' align='center'>
									TBD
								</Typography>
							</Paper>
							<Paper key='TBD4' sx={{ minHeight: 80 }}>
								<Typography variant='h2' className='title' align='center'>
									TBD
								</Typography>
							</Paper>
							<Paper key='TBD5' sx={{ minHeight: 150 }}>
								<Typography variant='h2' className='title' align='center'>
									TBD
								</Typography>
							</Paper>
						</Masonry>
					</Grid>
				</Grid>
			</Grid>
		</MainMenu>
	);
};

export default Main;
