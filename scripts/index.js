//const bundleDocument = require('./bundle-documents');
const shell = require('shelljs');
const path = require('path');
shell.cd(path.resolve(__dirname, '../definitions'));
shell.exec('git clone https://github.com/GamingEventAPI/definitions');

async function start() {
  //await bundleDocument(path.resolve(__dirname, '../definitions/rust_server.json'), path.resolve(__dirname, '../public/asyncapi/rust_server.json'));
  //await bundleDocument(path.resolve(__dirname, '../definitions/rust_processor.json'), path.resolve(__dirname, '../public/asyncapi/rust_processor.json'));
}

start();