export default function(params) {
  const { articleName = 'hello-world' } = params;
  return Promise.all([
    fetch('/api/intro').then(handleResponse),
    fetch('/api/articles').then(handleResponse),
    fetch(`/api/articles/${articleName}`).then(handleResponse),
    fetch('/api/projects').then(handleResponse)
  ])
  .then(([ intro, articles, article, projects ]) => {
    return {
      intro,
      articles,
      article,
      projects
    };
  })
}

function handleResponse(response) {
  return response.json();
}
