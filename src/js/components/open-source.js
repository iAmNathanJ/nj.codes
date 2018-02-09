import React, { PureComponent } from 'react';
import Page from 'components/page';
import OpenSourceCard from 'components/open-source-card';

const OpenSource = ({ route, data }) => {

  const renderProjects = projects => (
    projects.map(project => <OpenSourceCard key={project.id} {...project} />)
  );

  return (
    <Page pageName={route.pageName}>
      <div className="grid contain">
        {renderProjects(data.projects)}
      </div>
    </Page>
  );
}

export default OpenSource;
