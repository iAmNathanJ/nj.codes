import React from 'react';
import { Link } from 'react-router-dom';
import { toggleMenu } from 'helpers/menu-helpers';

const SiteHeader = ({ pageName }) => (
  <header className="site-header contain">
    <h1 className="site-title">
      <span className="c-host">
        <Link to="/">nj.codes/</Link>
      </span>
      <span className="c-path">
        {pageName}
      </span>
    </h1>
    <button className="menu-button" onClick={toggleMenu}>
      menu
    </button>
  </header>
);

export default SiteHeader;
