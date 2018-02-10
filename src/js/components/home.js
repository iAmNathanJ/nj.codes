import React, { PureComponent } from 'react';
import Page from 'components/page';
import changeTheme from 'helpers/change-theme';
import { Link } from 'react-router-dom';
import { createShadow } from 'helpers/long-shadow';

class Home extends PureComponent {
  componentDidMount() {
    createShadow(this.hi);
  }

  render() {
    const { route } = this.props;
    return (
      <Page pageName={route.pageName}>
        <div className="contain">
          <div className="intro border-top-accent">
            <div className="markdown">
              <h2 className="hi" ref={node => this.hi = node}>Hi Friends!</h2>
              <p>
                I'm Nate. I like JavaScript.<br /><br />
                I work at <a className="link" href="https://seesparkbox.com">Sparkbox</a>, where I get to write a lot of JavaScript.
                Sometimes <Link className="link" to="/articles">I write about JavaScript (or other things)</Link>.
              </p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;
