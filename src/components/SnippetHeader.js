import React, { PureComponent, Fragment } from "react";
import { IconTextWrap } from './icons';
import { storage, PREFERENCES } from '../utils';
import { btnReset } from '../styles';

class SnippetHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.store = storage(PREFERENCES);
    this.toggleWordWrap = this.toggleWordWrap.bind(this);
  }

  toggleWordWrap() {
    document.body.classList.toggle('word-wrap');
    this.store.set('wordWrap', document.body.classList.contains('word-wrap'));
  }

  render() {
    const { title } = this.props;
    return (
      <Fragment>
        <span>{title}</span>
        <button title="toggle word wrap" css={btnReset} className="btn-wrap" onClick={this.toggleWordWrap}>
          <IconTextWrap size="16" />
        </button>
      </Fragment>
    );
  }
}

export default SnippetHeader;
