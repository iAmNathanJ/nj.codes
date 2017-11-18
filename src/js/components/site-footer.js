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
          <li className="icon">
            <a
            href="https://seesparkbox.com/foundry/author/nate_jacobs"
            aria-label="My articles on the Sparkbox Foundry">
              <Sparkbox />
            </a>
          </li>
          <li className="icon">
            <a
            href="https://github.com/iAmNathanJ"
            aria-label="My GitHub profile">
              <GitHub />
            </a>
          </li>
          <li className="icon">
            <a
            href="https://codepen.io/iAmNathanJ/"
            aria-label="My Codepen profile">
              <Codepen />
            </a>
          </li>
          <li className="icon">
            <a
            href="https://twitter.com/nathanAlan"
            aria-label="My Twitter profile">
              <Twitter />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
