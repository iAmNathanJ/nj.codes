import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleNav extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: null };
  }

  componentDidMount() {
    this.setState({
      nav: (
        <nav>
          {this.linkTo(-1, 'Prev')} | {this.linkTo(1, 'Next')}
        </nav>
      )
    });
  }

  linkTo = (offset, label) => {
    const { articles } = this.props;
    const article = articles[articleIndex-offset];
    if (article) {
      return (
        <Link to={{
          pathname: `/articles/${article.path}`,
          state: { article }
        }}>
          {label}
        </Link>
      );
    }
    return null;
  };


  render() {
    return this.state.nav;
  }
};

export default ArticleNav;
