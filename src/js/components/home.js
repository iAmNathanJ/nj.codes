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
            <div className="markdown" dangerouslySetInnerHTML={data.intro} />
          </div>
        </div>
      </Page>
    );
  }
}
