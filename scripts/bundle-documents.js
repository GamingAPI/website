const bundler = require('asyncapi-bundler');
const fs = require('fs');
const path = require('path');

module.exports = async function bundleDocuments(documentPath, outputFile) {
  const bundledDocument = await bundler.bundle(
    fs.readFileSync(path.resolve(documentPath), 'utf-8'),
    {
      base: fs.readFileSync(path.resolve('./base.yml'), 'utf-8'),
    }
  );
  fs.writeFileSync(outputFile, bundledDocument.string());
};
