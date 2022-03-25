const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const pathToDocuments = './definitions';
fs.rmSync(pathToDocuments, { recursive: true, force: true });
const gitCommand = `git clone https://github.com/gamingapi/definitions ${pathToDocuments}`;
shell.exec(gitCommand);