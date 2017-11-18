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
          theme
        </button>
        <button className="menu-button close" onClick={closeMenu}>
          <span className="visually-hidden">close</span>
        </button>
      </header>
      <nav className="menu-items">
        <NavLink to="/" exact={true} className="menu-item" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/articles" exact={true} className="menu-item" onClick={closeMenu}>
          Articles
        </NavLink>
        <NavLink to="/open-source" exact={true} className="menu-item" onClick={closeMenu}>
          OSS
        </NavLink>
      </nav>
    </div>
  );
}
