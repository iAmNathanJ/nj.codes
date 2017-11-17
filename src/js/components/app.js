import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { getCurrentRoute } from '../routes';
import getAllData from 'helpers/get-all-data';

export default class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  componentDidMount() {
    const { match } = getCurrentRoute(location.pathname);
    getAllData(match.params)
    .then(({ intro, articles, article, projects }) => {
      this.setState({
        data: {
          ...this.state.data,
          intro,
          articles,
          article,
          projects
        }
      });
    });
  }

  render() {
    const { route } = this.props;
    const { data } = this.state;
    return renderRoutes(route.routes, { data });
  }
}
