import React, { PureComponent } from 'react';
import Page from 'components/page';
import changeTheme from 'helpers/change-theme';
import { Link } from 'react-router-dom';
import { createShadow } from 'helpers/long-shadow';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    createShadow(this.hi);
  }

  render() {
    const { route, data } = this.props;
    return (
      <Page pageName={route.pageName}>
        <div className="contain">
          <div className="intro border-top-accent">
            <div className="markdown">
              <h2 className="hi" ref={node => this.hi = node}>Hi Friends!</h2>
              <p>
                I'm Nate.<br />
                I like JavaScript.<br />
                I work at <a href="https://seesparkbox.com">Sparkbox</a>, where I get to write a lot of JavaScript.<br />
                Sometimes <Link to="/articles">I write about JavaScript (or other code related stuff)</Link>.
              </p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
