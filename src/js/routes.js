import { matchRoutes } from 'react-router-config';
import App from 'components/app';
import Home from 'components/home';
import Articles from 'components/articles';
import Article from 'components/article';
import OpenSource from 'components/open-source';

export const routes = [{
  component: App,
  routes: [{
    path: '/',
    exact: true,
    pageName: 'home',
    component: Home,
    getData() {
      return fetch(`http://localhost:${PORT}/api/articles`)
      .then(handleResponse);
    }
  },
  {
    path: '/articles',
    exact: true,
    pageName: 'articles',
    component: Articles,
    getData() {
      return fetch(`http://localhost:${PORT}/api/articles`)
      .then(handleResponse)
      .then(articles => {
        return { articles };
      });
    }
  },
  {
    path: '/articles/:articleName',
    pageName: 'articles',
    component: Article,
    getData(params) {
      return fetch(`http://localhost:${PORT}/api/articles/${params.articleName}`)
      .then(handleResponse)
      .then(article => {
        return { article };
      });
    }
  },
  {
    path: '/open-source',
    pageName: 'open-source',
    component: OpenSource,
    getData() {
      const projects = [
        'postcss-split-mq',
        'rrun',
        'nj.codes'
      ]
      .map(repo => {
        return fetch(`http://localhost:${PORT}/api/repos/${repo}`)
        .then(handleResponse);
      });
      return Promise.all(projects)
      .then(projects => {
        return { projects }
      });
    }
  }]
}];

export function getData(url, defaultData = {}) {
  const { route, match } = getCurrentRoute(url);
  return route.getData
    ? route.getData(match.params)
    : Promise.resolve(defaultData);
}

export function getCss(url) {
  const { route, match } = getCurrentRoute(url);
  return route.css
    ? route.css
    : Promise.resolve('');
}

export function getCurrentRoute(url) {
  const exactMatch = matchRoutes(routes, url).find(({ match }) =>  match.isExact);
  const { route = {}, match = {} } = (exactMatch || {});
  return { route, match };
}

function handleResponse(response) {
  return response.json();
}
