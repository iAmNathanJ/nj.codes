import fm from 'front-matter';
import marked from 'marked';
import prism from 'prismjs';

marked.setOptions({
  highlight(code, lang) {
    const languageParser = prism.languages[lang] || prism.languages.clike;
    return prism.highlight(code, languageParser);
  }
});

export default function(article) {
  const { attributes, body } = fm(article);
  const __html = marked(body);
  return { ...attributes, body, __html };
}
