export default function(params = {}) {
  const { articleName = 'hello-world' } = params;
  return Promise.all([
    fetch('/api/articles').then(handleResponse),
    fetch(`/api/articles/${articleName}`).then(handleResponse),
    fetch('/api/projects').then(handleResponse)
  ])
  .then(([ articles, article, projects ]) => {
    return {
      articles,
      article,
      projects
    };
  });
}

function handleResponse(response) {
  return response.json();
}
