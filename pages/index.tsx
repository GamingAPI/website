import { Button, Grid, Typography, Accordion,Paper} from '@mui/material';
import React from "react";
import {MainMenu} from '../components/MainMenu';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import IconGithub from '../components/icons/Github';

const Main: React.FunctionComponent<any> = () => {
  return (
    <MainMenu hideSideMenu={true}>
      <main>
        <Grid container spacing={10} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={7} container spacing={6}>
            <Grid item xs={12}>
              <Typography variant="h2" className="title">
                Supported games
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Masonry columns={{xs: 1, sm: 2, md: 3 }}  spacing={2}>
                <Paper key="rustgame" sx={{ height: 300 }}>
                  <div style={{width: '100%', height: '100%', position: 'relative'}}>
                    <Image
                      alt='Rust'
                      src='/img/games/23bbfde495802aab16bba40542f610cc.png'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </Paper>
                <Paper key="TBD1" sx={{ minHeight: 100 }}>
                  <Typography variant="h2" className="title" align="center">TBD</Typography>
                </Paper>
                <Paper key="TBD2" sx={{ minHeight: 150 }}>
                  <Typography variant="h2" className="title" align="center">TBD</Typography>
                </Paper>
                <Paper key="TBD3" sx={{ minHeight: 40 }}>
                  <Typography variant="h2" className="title" align="center">TBD</Typography>
                </Paper>
                <Paper key="TBD4" sx={{ minHeight: 80 }}>
                  <Typography variant="h2" className="title" align="center">TBD</Typography>
                </Paper>
                <Paper key="TBD5" sx={{ minHeight: 150 }}>
                  <Typography variant="h2" className="title" align="center">TBD</Typography>
                </Paper>
              </Masonry>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} container spacing={6}>
            <Grid item xs={12} md={6} container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h2" className="title">
                  Well defined API
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" className="title">
                  Interacting with in-game events as easy as installing a library. Interact either through a REST interface, or through events over NATS.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" style={{float:"right"}}>Find your API</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{width: '100%', height: '100%', position: 'relative'}}>
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
              <Typography variant="h2" className="title">
                Generated libraries for easy integration
              </Typography>
            </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" className="title">
                  We have a different clients ready to use with only a few lines of code needed.
                </Typography>
              </Grid>
            <Grid item xs={12}>
              <SyntaxHighlighter language="typescript" style={dracula}>
                {`import { NatsAsyncApiClient } from '@eventgamingapi/rust';

const client = new NatsAsyncApiClient();
await client.connect();
await client.subscribeToRustServerStarted((message) => {
  console.log(\`Server have started\`)
});`}
              </SyntaxHighlighter>
            </Grid>
            <Grid item container spacing={10} justifyContent="center" alignItems="center" xs={12}>
              <Grid item xs={2}>
                <Button variant="outlined">TypeScript/JS</Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined">.NET</Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined">Go</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>

      <footer>
        <Typography variant="overline" className="title">
          masterpiece from <a href='eventstack.tech'>EventStack</a>
        </Typography>
      </footer>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </MainMenu>
  )
}

export default Main;
