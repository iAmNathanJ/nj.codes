import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { getCurrentRoute } from '../routes';
import getAllData from 'helpers/get-all-data';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = this.props.data;
  }

  componentDidMount() {
    const { match } = getCurrentRoute(location.pathname);
    getAllData(match.params)
    .then(({ articles, article, projects }) => {
      const articleIndex = articles.findIndex(a => a.oid === article.oid);
      this.setState({
        ...this.state,
        articles,
        article,
        articleIndex,
        projects
      });
    });
  }

  updateArticle = (article) => {
    const articleIndex = this.state.articles.findIndex(a => a.oid === article.oid);
    this.setState({
      ...this.state,
      article,
      articleIndex
    });
  }

  render() {
    const { route } = this.props;
    return renderRoutes(route.routes, { ...this.state, updateArticle: this.updateArticle });
  }
}

export default App;
