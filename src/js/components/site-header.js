import React, { PureComponent } from 'react';

export default class SiteHeader extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="site-header">
        <h1 className="site-title">nj</h1>
      </header>
    );
  }
}
