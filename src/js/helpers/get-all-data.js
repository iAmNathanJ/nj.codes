export default function(params = {}) {
  return Promise.all([
    fetch('/api/articles').then(handleResponse),
    fetch('/api/projects').then(handleResponse)
  ])
  .then(([ articles, projects ]) => {
    return {
      articles,
      projects
    };
  });
}

function handleResponse(response) {
  return response.json();
}
