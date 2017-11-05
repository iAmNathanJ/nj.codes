import React, { PureComponent } from 'react';
import toggleMenu from 'helpers/toggle-menu';

export default class SiteHeader extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { pageName } = this.props;
    return (
      <header className="site-header contain">
        <h1 className="site-title">
          <span className="c-red">nj.codes/</span>
          <span className="c-gray">{pageName}</span>
        </h1>
        <button className="menu-button" onClick={toggleMenu}>
          menu
        </button>
      </header>
    );
  }
}
