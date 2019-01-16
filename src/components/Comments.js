import React, { Component } from 'react';
import { comments, contain } from '../styles';

class Comments extends Component {
  componentDidMount() {
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div ref={n => this.comments = n} css={[contain, comments]}></div>
    );
  }
}

export default Comments;
