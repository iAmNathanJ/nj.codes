import React from 'react';
import Page from 'components/page';
import OpenSourceCard from 'components/open-source-card';

const OpenSource = ({ route, projects }) => (
  <Page pageName={route.pageName}>
    <div className="grid contain">
      {projects.map(project =>
        <OpenSourceCard key={project.id} {...project} />
      )}
    </div>
  </Page>
);

export default OpenSource;
