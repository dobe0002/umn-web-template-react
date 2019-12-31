import React from 'react';
import { render } from 'react-dom';
import { UmnHeader, UmnFooter, AppBanner } from '../../src/index.jsx';

const App = () => (
  <div>
    <UmnHeader mainNavId='foo' mainContentId='bar' />
    <AppBanner appTitle='My Sample Super Duper Application' />
    <div style={{ height: '50px' }} />
    <UmnFooter />
  </div>
);

render(<App />, document.getElementById('app'));
