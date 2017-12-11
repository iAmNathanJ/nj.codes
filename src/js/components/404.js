import React from 'react';
import Page from 'components/page';

export default ({ route }) => (
  <Page pageName={route.pageName}>
    <div className="contain t-center">
      <h2>404</h2>
      <p>Oops! Nothing here.</p>
      <p>¯\_(ツ)_/¯</p>
    </div>
  </Page>
);
