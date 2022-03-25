/* eslint-disable @next/next/no-img-element */
import { Accordion, AccordionDetails, AccordionSummary, Link, Grid, List, Typography, CardMedia, Card, CardContent } from '@mui/material';
import { MainMenu } from '../components/MainMenu';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useState } from 'react';

function Tools() {
  return (
    <MainMenu hideSideMenu={true}>
      <Grid container spacing={0} 
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image="/img/opensource.webp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Open source tools
              </Typography>
              <Grid container spacing={0} 
                justifyContent="center"
                alignItems="center" 
                height={"100%"}>
                <Grid item xs={12}>
                  <Typography>This is a tribute to all the amazing open source tools that make this project possible. </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>AsyncAPI Cupid</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Because all applications are described with AsyncAPI, we are able to show the relationship between them using Cupid. See it in action <Link href="/services/flows">here</Link>
                      </Typography>
                      <Link href="www.github.com/asyncapi/cupid">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>AsyncAPI react components</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Because all applications are described with AsyncAPI, we are able to each application using the react-components. See the API for <Link href="/services/rust/server/api">the rust server</Link>, <Link href="/services/rust/processor/api">the rust processor</Link>, among others. They are dynamically rendered based on their respective AsyncAPI documents.
                      </Typography>
                      <Link href="https://github.com/asyncapi/asyncapi-react">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>AsyncAPI Generator</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Because all applications are described with AsyncAPI, we are able to use the generator to save us a ton of time building the software, as we can (among other things) generate the libraries that enable the communication between the applications. See the library <Link href="https://github.com/GamingEventAPI/umod-rust-server-extension">the rust server uses</Link>, <Link href="https://github.com/GamingEventAPI/rust-processor-nats-library">the rust processor uses</Link>, among others. These libraries can easily be used to build your own services.
                      </Typography>
                      <Link href="https://github.com/asyncapi/generator">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>ts-nats-template</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        One of the templates being used with the AsyncAPI generator to generate the communication libraries. One of the libraries generated from this is <Link href="https://github.com/GamingEventAPI/rust-processor-nats-library">the rust processor uses</Link>.
                      </Typography>
                      <Link href="https://github.com/asyncapi/ts-nats-template">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>dotnet-nats-template</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        One of the templates being used with the AsyncAPI generator to generate the communication libraries. One of the libraries generated from this is <Link href="https://github.com/GamingEventAPI/umod-rust-server-extension">the rust server uses</Link>.
                      </Typography>
                      <Link href="https://github.com/asyncapi/dotnet-nats-template">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>AsyncAPI Modelina</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Because each application is defined with AsyncAPI, we have also defined the message payloads. Instead of manually writing the payload models from scratch, modelina is used to generate them from the AsyncAPI documents.
                      </Typography>
                      <Link href="https://github.com/asyncapi/modelina">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>gh-action-asyncapi-document-bump</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        For automatization purposes we needed a way to handle the versioning of the AsyncAPI documents. For this reason this GitHub action was created to follow conventional commits to automatically bump the version of the AsyncAPI documents that was changed.
                      </Typography>
                      <Link href="https://github.com/jonaslagoni/gh-action-asyncapi-document-bump">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>AsyncAPI parser</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        For the website we have different use-cases where we need to pre-parse the AsyncAPI documents, before passing to the tools.
                      </Typography>
                      <Link href="https://github.com/asyncapi/parser-js">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>React and Next</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Powers the website.
                      </Typography>
                      <Link href="https://nextjs.org/">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>uMod</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Gives an easy integration with the games and allow us to catch events in-game.
                      </Typography>
                      <Link href="https://umod.org/">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Docker and Swarm</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Powers the deployment of the website, game servers, NATS brokers, etc.
                      </Typography>
                      <Link href="https://www.docker.com/">Go to tool</Link>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </MainMenu>
  )
}

export default Tools;