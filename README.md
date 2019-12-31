# UofM React Header and Footer

React versions of the University of Minnesota web template items that can easily be included into a React-based application as npm packages.  Currently the following are available:
  * UmnHeader - Contains the institutional, maroon header with search bar.
  * AppBanner - Simple orange application banner.
  * UmnFooter - Contains the institutional text footer with copyright statement and privacy policy link.

  ---

  ## Getting Started

  ### Building a npm package
  As of right now, this repo isn't a not available as a public package, so you will need to download this repo and manually create that npm package.

    1.  Clone or download this repo.
    2.  Run `npm run buildPackage`.  This should create `umn_header_footer-*.tgz` file.
    3.  Place this `.tgz` file in a location where your React application will have access to it.

  ### Adding this package to your project
  In the project that you would like to include the UofM web template components, add `.tgz`to your `package.json` file:
  ```
  ...
  devDependencies: {
    "umn-web-template-components-react": "path_to_tgz_file",
    ...
  }
  ...
  ```

  Then run `npm install` to install the web components into your application.

  ---

## Using the UofM web template components

## Requirements
In order to use these web components, you need to ensue that the following are installed into your project (usually by being listed in the package.json file).
  * react
  * react-dom

On the React file that you want to use the web components, include the modules you want to use.  For example:
```
import { UmnHeader, UmnFooter,  AppBanner } from 'umn-web-template-components-react';
```

Then use the modules a normal React modules:

```
const App = () => (
  <div>
    <UmnHeader />
    <AppBanner />
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
The following props can be passed.  All are optional unless specified otherwise.
  * ` mainNavId` -  String.  Id of the start of the main navigation.  Used to create a "skip to navigation" link.
  *  `mainContentId` - String.  Id of the start of the main content.  Used to create a "skip to content" link.

### AppBanner
Simple orange application banner.

#### Props
The following props can be passed.  All are optional unless specified otherwise.
  * ` appTitle` -  String.  Application title.  Required.

### UmnFooter
The institutional footer with the copyright year and privacy statement link.

#### Props
The following props can be passed.  All are optional unless specified otherwise.
  *  `year` -  String.  Copyright year.  Will default to the year the footer component was last updated.


---

## Tests
Test can be run by typing:
```
npm run test
```

Most of the test are snapshot based tests.  If you make a change to the UI, then you will need to update these snapshots.  To update the snapshots, type:
```
npm run test:update
```

Before checking in the new snapshots into GitHub, be sure they are correct.  All snapshots are located in `__tests__/__snapshots__`.

---

## Preview during development
While working, you can preview the components in a browser.  First, set the build to watch for changes by typing:
```
npm run build:dev
```

Then open the following file in a browser: `/dev/index.html`.  **Note:** You will need to refresh the browser page to see changes.
