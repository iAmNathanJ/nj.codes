import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { contain } from '../styles';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <div css={contain}>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
