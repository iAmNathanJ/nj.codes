import React, { Fragment, useRef, useEffect } from 'react';
import Revisions from './Revisions';
import { IconGitHub } from './icons';
import {
  createShadow,
  formatTime,
  ghEditLink,
  getRevisionLandmarks
} from '../utils';
import {
  articleTile,
  articleSubtitle,
  articleMeta,
  articleRevisions,
  iconLink
} from '../styles';

const ArticleMeta = ({ meta, revisions, file }) => {
  const titleRef = useRef(null);
  const { latestRevision } = getRevisionLandmarks(revisions);

  useEffect(() => {
    createShadow(titleRef.current);
  });

  return (
    <Fragment>
      <h1 css={articleTile} ref={titleRef}>
        <span>{meta.title}</span>
      </h1>
      <div css={articleMeta}>
        <span css={articleSubtitle}>{meta.subtitle}</span>
        <div css={articleRevisions} style={{fontSize: '0.75rem'}}>
          <Revisions revisions={revisions} file={file} />
          <time dateTime={latestRevision.date}>
            {formatTime(latestRevision.date)}
          </time>
          <br/>
          <a href={ghEditLink(file)} className="edit-link" css={iconLink}>
            <span className="link-text">edit on GitHub</span>
            <IconGitHub size={26} />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ArticleMeta;
