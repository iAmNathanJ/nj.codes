import React from 'react';
import { renderRoutes } from 'react-router-config';
import SiteHeader from 'components/site-header';
import SiteFooter from 'components/site-footer';
import SiteMenu from 'components/site-menu';

export default ({ pageName, children }) => {
  return (
    <div>
      <SiteHeader pageName={pageName} />
      <main className="main">
        {children}
      </main>
      <SiteFooter />
      <SiteMenu />
    </div>
  );
}
