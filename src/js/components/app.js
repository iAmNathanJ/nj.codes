import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { getCurrentRoute } from '../routes';
import getAllData from 'helpers/get-all-data';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = this.props.data;
  }

  scrollIfNecessary = () => {
    const thisNav = this.props.history.location.key;
    const lastNav = window.sessionStorage.getItem('lastNav');
    if (thisNav !== lastNav) {
      window.scrollTo(0, 0);
      window.sessionStorage.setItem('lastNav', thisNav);
    }
  }

  componentDidUpdate() {
    this.scrollIfNecessary();
  }

  componentDidMount() {
    const { match } = getCurrentRoute(location.pathname);
    getAllData(match.params)
    .then(({ articles, projects }) => {
      this.setState({
        ...this.state,
        articles,
        projects
      });
    });
  }

  render() {
    const { route } = this.props;
    return renderRoutes(route.routes, { ...this.state });
  }
}

export default App;
