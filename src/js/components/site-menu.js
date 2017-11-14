import React from 'react';
import { NavLink } from 'react-router-dom';
import { toggleMenu, closeMenu } from 'helpers/menu-helpers';
import toggleTheme from 'helpers/change-theme';

export default () => {
  return (
    <div className="site-menu">
      <div className="backdrop" onClick={closeMenu}></div>
      <header className="menu-header contain">
        <button className="menu-button" onClick={toggleTheme}>
          color
        </button>
        <button className="menu-button" onClick={closeMenu}>
          close
        </button>
      </header>
      <ul className="menu-items">
        <NavLink to="/" exact={true} className="menu-item" onClick={closeMenu}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/articles" exact={true} className="menu-item" onClick={closeMenu}>
          <li>Articles</li>
        </NavLink>
        <NavLink to="/open-source" exact={true} className="menu-item" onClick={closeMenu}>
          <li>OSS</li>
        </NavLink>
      </ul>
    </div>
  );
}
