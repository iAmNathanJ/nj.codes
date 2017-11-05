import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import SiteHeader from 'components/site-header';
import SiteFooter from 'components/site-footer';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { Component, pageName, data } = this.props;
    const { attributes, body } = data;
    return [
      <SiteHeader key="site-header" pageName={pageName.toLowerCase()}/>,
      <Component key="site-body" title={attributes.title} content={body} />,
      <SiteFooter key="site-footer" />
    ];
  }
}
