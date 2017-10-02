import React, { PureComponent } from 'react';
import SiteHeader from 'components/site-header';
import SiteFooter from 'components/site-Footer';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return [
      <SiteHeader key="site-header" />,
      <SiteFooter key="site-footer" />
    ];
  }
}
