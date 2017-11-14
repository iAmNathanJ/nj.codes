import React from 'react';
import { Link } from 'react-router-dom';
import { toggleMenu } from 'helpers/menu-helpers';

export default ({ pageName }) => {
  return (
    <header className="site-header contain">
      <h1 className="site-title">
        <span className="c-accent">
          <Link to="/">nj.codes/</Link>
        </span>
        <span className="c-gray">
          {pageName}
        </span>
      </h1>
      <button className="menu-button" onClick={toggleMenu}>
        menu
      </button>
    </header>
  );
}
