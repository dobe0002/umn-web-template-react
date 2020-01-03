const path = require('path');
const fs = require('fs');

let packageJSON = fs.readFileSync(path.join(__dirname, '../package.json'));
packageJSON = JSON.parse(packageJSON);
packageJSON.scripts = {};
packageJSON.devDependencies = {};
packageJSON.jest = {};
fs.writeFileSync(
  path.join(__dirname, '../package.json'),
  JSON.stringify(packageJSON)
);
process.exitCode = 0;
