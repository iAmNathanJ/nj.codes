import React, { PureComponent } from 'react';

export default class Articles extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol className="article-list">
        <li className="article-list__article"><a href="">Article 1</a></li>
        <li className="article-list__article"><a href="">Article 2</a></li>
        <li className="article-list__article"><a href="">Article 3</a></li>
        <li className="article-list__article"><a href="">Article 4</a></li>
      </ol>
    );
  }
}
