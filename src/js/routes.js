import { matchRoutes } from 'react-router-config';
import App from 'components/app';
import Home from 'components/home';
import Articles from 'components/articles';
import Article from 'components/article';
import OpenSource from 'components/open-source';

export const routes = [{
  component: App,
  getData() {
    return fetch(`http://localhost:${PORT}/api/intro`)
    .then(handleResponse)
    .then(intro => {
      return { intro };
    });
  },
  routes: [{
    path: '/',
    exact: true,
    pageName: 'home',
    component: Home
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
      return fetch(`http://localhost:${PORT}/api/projects`)
      .then(handleResponse)
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

export function getCurrentRoute(url) {
  const exactMatch = matchRoutes(routes, url).find(({ match }) =>  match.isExact);
  const { route = {}, match = {} } = (exactMatch || {});
  return { route, match };
}

function handleResponse(response) {
  return response.json();
}
