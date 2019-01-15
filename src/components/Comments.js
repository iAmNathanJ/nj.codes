import React, { Component } from 'react';
import { initUtterances } from '../utils';
import { comments, contain } from '../styles';

class Comments extends Component {
  componentDidMount() {
    // initUtterances(this.comments);
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
