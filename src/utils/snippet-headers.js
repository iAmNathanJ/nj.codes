import React from 'react';
import { render } from 'react-dom';
import SnippetHeader from '../components/SnippetHeader';

function getTitle(snippet) {
  return (
    snippet.previousSibling &&
    snippet.previousSibling.previousSibling &&
    snippet.previousSibling.previousSibling.constructor.name === 'Comment'
  )
    ? snippet.previousSibling.previousSibling.textContent.trim()
    : '';
}

function processComment(snippet) {
  const title = getTitle(snippet);
  const js = snippet.textContent;
  return { snippet, js, title };
}

function renderSnippetHeader({ snippet, js, title }) {
  if (title === 'no-header') return;
  const header = document.createElement('header');
  header.classList.add('snippet-header');
  snippet.prepend(header);
  render(<SnippetHeader snippet={snippet} title={title} js={js} />, header);
}

export function addSnippetHeaders(article) {
  const snippets = Array.from(article.querySelectorAll('.gatsby-highlight'));
  snippets
    .map(processComment)
    .forEach(renderSnippetHeader);
}
