import React, { PureComponent } from 'react';
import Sparkbox from 'components/icons/sparkbox';
import Codepen from 'components/icons/codepen';
import GitHub from 'components/icons/github';
import Twitter from 'components/icons/twitter';

export default class SiteFooter extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="site-footer">
        <ul className="site-footer__icons">
          <li className="icon"><a href=""><Sparkbox /></a></li>
          <li className="icon"><a href=""><Codepen /></a></li>
          <li className="icon"><a href=""><GitHub /></a></li>
          <li className="icon"><a href=""><Twitter /></a></li>
        </ul>
      </footer>
    );
  }
}
