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
          <li className="icon"><a href="https://seesparkbox.com/foundry/search/results/b36ca9c45bda44fb6d09889b48e2738c/"><Sparkbox /></a></li>
          <li className="icon"><a href="https://github.com/iAmNathanJ"><GitHub /></a></li>
          <li className="icon"><a href="https://codepen.io/iAmNathanJ/"><Codepen /></a></li>
          <li className="icon"><a href="https://twitter.com/nathanAlan"><Twitter /></a></li>
        </ul>
      </footer>
    );
  }
}
