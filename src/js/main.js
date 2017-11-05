import React from 'react';
import { hydrate } from 'react-dom';
import App from 'components/app';
import SiteBody from 'components/site-body';

const { pageName } = nj;
const url = `http://localhost:3000/api${window.location.pathname}`;

fetch(url)
.then(response => response.json())
.then(article => {
  hydrate(
    <App
      Component={SiteBody}
      pageName={pageName}
      data={article}
    />,
    document.querySelector('#root')
  );
})
.catch(err => {
  console.error(err);
});
