import React, { PureComponent } from 'react';
import Page from 'components/page';
import Markdown from 'react-markdown';
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
        <Markdown className="markdown contain" source={data.intro} />
      </Page>
    );
  }
}
