import React from 'react';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header
        appTitle='Hello World'
        mainNavId='mainNav'
        mainContentId='mainArea'
      />
      <main id='mainArea'>
        <p>This is the main body of the page ...</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
