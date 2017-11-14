import React, { PureComponent } from 'react';
import Page from 'components/page';
import OpenSourceCard from 'components/open-source-card';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  openSource = (projects) => {
    return projects.map(project => {
      return <OpenSourceCard key={project.id} {...project} />
    });
  }

  render() {
    const { route, data } = this.props;
    return (
      <Page pageName={route.pageName}>
        <div className="grid contain">
          {this.openSource(data.projects)}
        </div>
      </Page>
    );
  }
}
