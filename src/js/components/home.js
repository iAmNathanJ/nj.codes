import React, { PureComponent } from 'react';
import Page from 'components/page';
import changeTheme from 'helpers/change-theme';
import { Link } from 'react-router-dom';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { route, data } = this.props;
    return (
      <Page pageName={route.pageName}>
        <div className="contain">
          <div className="intro border-top-accent">
            <div className="markdown">
              <h2>Hello!</h2>
              <p>I'm Nate.</p>
              <p>I like JavaScript.</p>
              <p>I work at <a href="https://seesparkbox.com">Sparkbox</a> where I get to write a lot of JavaScript.</p>
              <p>Sometimes <Link to="/articles">I write about JavaScript (or other code related stuff)</Link>.</p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
