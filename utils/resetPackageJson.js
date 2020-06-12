// This file minimizes the package.json file before it is included in the package to be published.
const path = require('path');
const fs = require('fs');

let packageJSON = fs.readFileSync(path.join(__dirname, '../package.json'));
packageJSON = JSON.parse(packageJSON);
packageJSON.scripts = {};
packageJSON.devDependencies = {};
packageJSON.prettier = {};
packageJSON.eslintConfig = {};
packageJSON.stylelint = {};
packageJSON.husky = {};
packageJSON.jest = {};
packageJSON.browserslist = {};
fs.writeFileSync(
  path.join(__dirname, '../package.json'),
  JSON.stringify(packageJSON)
);
process.exitCode = 0;
