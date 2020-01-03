# UofM React Header and Footer

React versions of the University of Minnesota web template items that can easily be included into a React-based application as npm packages. Currently the following are available:

- UmnHeader - Contains the institutional, maroon header with search bar.
- AppBanner - Simple orange application banner.
- UmnFooter - Contains the institutional text footer with copyright statement and privacy policy link.

---

## Getting Started - Adding this package to your project

There are two ways to include this file: download the tgz file from GitHub or Use GitHub as your npm registry.

### Method 1 - download tgz file

Go to: `https://github.com/dobe0002/umn-web-template-react/packages/95784` and download the `.tgz` file under the "Assets" header.

In the project that you would like to include the UofM web template components, add the path to the`.tgz` file to your `package.json` file:

```
...
dependencies: {
  "@dobe0002/umn-web-template-react": "path_to_tgz_file",
  ...
}
...
```

Then run `npm install`.

### Method 2 - Use GitHub as the registry (preferred)

In your project, create a `.npmrc` file at the root of your project with the following content:

```
registry=https://npm.pkg.github.com/dobe0002
```

If you need to use packages from multiple GitHub organizations, use the following format:

```
registry=https://npm.pkg.github.com/dobe0002
@facebook:registry=https://npm.pkg.github.com
@webpack:registry=https://npm.pkg.github.com
@babel:registry=https://npm.pkg.github.com
```

#### Method 2 - Logging into GitHub

You need to login to GitHub in order to use it as a npm registry. There are two ways to login to GitHub: login via the command line before downloading the packages.

Both methods require you to use a personal access token. [How to create a personal access token.](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

Ensure that both `repo` and `read:packages` scopes have been set.

**Note** Do not check in any files that contain the personal access token.

##### Method 2 - Login-in option 1 - Using command line

After the .npmrc file has been created, run the following in a command line: `npm login` and then enter the login information:

```
  $ npm login --registry=https://npm.pkg.github.com
  > Username: GITHUB_USERNAME
  > Password: TOKEN
  > Email: PUBLIC-EMAIL-ADDRESS
```

Note: You will need to re-log in with each new terminal window.

##### Method 2 - Login-in option 2 - Using .npmrc file

Instead of logging in via the command line, you can add the following to the top of the .npmrc file:

```
//npm.pkg.github.com/:_authToken=TOKEN
```

Replace `TOKEN` with your personal access token.

#### Method 2 - Install package

In the project that you would like to include the UofM web template components, add web components to your `package.json` file:

```
...
dependencies: {
  "@dobe0002/umn-web-template-react": "0.1.2",
  ...
}
...
```

But replace the version number with the wanted version.

Then run `npm install`.

---

### Running npm install in a GitHub Action

When running `npm install` within a GitHub action, a token is automatically created, so a personal access token does not need to be created. Use the following in your GitHub workflow file in the `steps` section:

```
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1

    - uses: actions/setup-node@v1
      with:
        node-version: 12
        registry-url: https://npm.pkg.github.com/
        scope: '@dobe0002'

    - run: npm install
      env:
        NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

---

## Using the UofM web template components

### Requirements

In order to use these web components, you need to ensue that the following are installed into your project (usually by being listed in the package.json file).

- react
- react-dom

On the React file that you want to use the web components, include the modules you want to use. For example:

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

The following props can be passed. All are optional unless specified otherwise.

- `mainNavId` - String. Id of the start of the main navigation. Used to create a "skip to navigation" link.
- `mainContentId` - String. Id of the start of the main content. Used to create a "skip to content" link.

### AppBanner

Simple orange application banner.

#### Props

The following props can be passed. All are optional unless specified otherwise.

- `appTitle` - String. Application title. Required.

### UmnFooter

The institutional footer with the copyright year and privacy statement link.

#### Props

The following props can be passed. All are optional unless specified otherwise.

- `year` - String. Copyright year. Will default to the year the footer component was last updated.

---

## Tests

Test can be run by typing:

```
npm run test
```

Most of the test are snapshot based tests. If you make a change to the UI, then you will need to update these snapshots. To update the snapshots, type:

```
npm run test:update
```

Before checking in the new snapshots into GitHub, be sure they are correct. All snapshots are located in `__tests__/__snapshots__`.

---

## Preview during development

While working, you can preview the components in a browser. First, set the build to watch for changes by typing:

```
npm run build:dev
```

Then open the following file in a browser: `/dev/index.html`. **Note:** You will need to refresh the browser page to see changes.
