# UofM React Header and Footer

React versions of the University of Minnesota web template items that can easily be included into a React-based application as npm packages. Currently the following are available:

- UmnHeader - Contains the institutional, maroon header with search bar.  Also contains an optional application banner.
- UmnFooter - Contains the institutional text footer with copyright statement and privacy policy link.

---

## Getting Started - Adding this package to your project

There are two ways to include this file: download the tgz file from GitHub or Use GitHub as your npm registry.

### Method 1 - download tgz file

Go to: `https://github.com/dobe0002/umn-web-template-react/packages/95784` and download the `.tgz` file under the "Assets" header.

In the project that you would like to include the UofM web template components, add the path to the`.tgz` file to your `package.json` file:

```
dependencies: {
  "@dobe0002/umn-web-template-react": file:/"path_to_tgz_file",
}
```
For example: 
```
dependencies: {
  "@dobe0002/umn-web-template-react": "file:/./packages/dobe0002-umn-web-template-react-1.0.0.tgz"
  ...
}
```

Then run `npm install`.

### Method 2 - Get the package directly from GitHub

In your package.json, you can get the package directly from GitHub.  Please see the [READMD-GitHub.md](READMD-GitHub.md) file for more information.

---

## Using the UofM web template components

### Requirements

In order to use these web components, you need to ensue that the following are in your package.json file and installed.

- react
- react-dom

On the React file that you want to use the web components, include the modules you want to use. For example:

```
import { UmnHeader, UmnFooter } from '@dobe0002/umn-web-template-react';
```

Then use the modules a normal React modules:

```
const App = () => (
  <div>
    <UmnHeader />
    <div> ... </div>
    <UmnFooter />
  </div>
);

```

---

## Component Details

### UmnHeader

The maroon institutional header with a search for `https://usearch.umn.edu/`.

#### Props

The following props can be passed. All are optional unless specified otherwise.

- `mainNavId` - String. Id of the start of the main navigation. Used to create a "skip to navigation" link.
- `mainContentId` - String. Id of the start of the main content. Used to create a "skip to content" link.
- `appTitle` - String. Application title.



### UmnFooter

The institutional footer with the copyright year and privacy statement link.

#### Props

The following props can be passed. All are optional unless specified otherwise.

- `year` - String. Copyright year. Will default to the year the footer component was last updated.

---
---
---

## Developing

This package was created using as few dependencies as possible.  Currently on React and React-Dom are required.  With that said, there are numerous developmental dependencies and tools to help developing the package.

The React files are saved in the `src/HeaderFooter` directory.  Any new components should be listed in the `src/HeaderFooter/index.jsx` file.


## Tests
The test files are located in `src/__tests__` directory.  All components in teh `src/HeaderFooter` should have a corresponding test with high test  coverage.

You can run the test suite by typing `npm run test` in a terminal window while at the root of the project.  When you run this command, a coverage report is created and saved in the `coverage` directory.

If you wish to have the tests continually run while you are working, you can start the test in "watch" mode by typing `npm run test:watch` in a terminal window at the root of the project.  Coverage reports will not be collected or updated while in "watch" mode.

### Snapshots
Unfortunately the test suite heavily relies on snapshot tests.  You can update snapshots after making UI changes by typing `npm run test:update` in a terminal window while at the root of the project.  Newly updated snapshots should be checked into git.


## Linting
Linting is enforced before files can be committed into git (by using Husky).  You can check all files in the project for linting by typing `npm run lint` in a terminal window while at the root of the project. 

You automatically fix some linting issues by running `npm run lint:fix` in a terminal window while at the root of the project.


## Security Audit
You can check for any high or critical known security vulnerabilities in the dependencies by typing `npm run npmAudit`.  All known security vulnerabilities will be displayed, but the previous command will fail only if at least one of the issues are ranked "high" or higher.


##  Running development server
In order to make development easier, there is sample component that contains the modules in this packge (located at `src/App.jsx`).  To view this component in a browser, type `npm run start` in a terminal window while at the root of the project.  This will start the development server at `http://localhost:3000` at and load the page in a browser.  

Any change to a file will cause the application to be re-build an automatically show those changes in the browser.


## Creating a package (aka a .tgz file)
To create a minified .tgz file to be used in another project or be hosted in an nmp registry, run `npm run buildPackage` in a terminal window at the root of the project.  The .tgz file will be saved at the root of the project.