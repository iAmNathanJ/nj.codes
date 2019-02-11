import React, { useRef } from 'react';
import { useMenuInteractions } from '../hooks';
import { getRevisionLandmarks, ghHistoryLink, formatTime } from '../utils';
import { btnReset } from '../styles';

function Revisions({ file, revisions }) {
  const { latestRevision, pastRevisions } = getRevisionLandmarks(revisions);

  return (
    <div>
      <RevisionLink file={file} sha1={latestRevision.sha1} />
      <br/>
      {
        pastRevisions.length > 0 &&
        <RevisionList file={file} revisions={pastRevisions} />
      }
    </div>
  );
};

function Revisions2({ file, revisions }) {
  const { latestRevision, pastRevisions } = getRevisionLandmarks(revisions);

  return (
    <div>
      <RevisionLink file={file} sha1={latestRevision.sha1} />
      <br/>
      {
        pastRevisions.length > 0 &&
        <RevisionList2 file={file} revisions={pastRevisions} />
      }
    </div>
  );
};

function RevisionList({ file, revisions }) {
  const menuRef = useRef();
  const [ menuOpen, toggleMenu ] = useMenuInteractions(menuRef);

  return (
    <div ref={menuRef}>
      <button
        aria-label={`${menuOpen ? 'close' : 'open'} history`}
        css={btnReset}
        onClick={toggleMenu}
      >
        {menuOpen ? '-' : '+'} history
      </button>
      <ul hidden={!menuOpen}>
        {revisions.map(({ sha1, date }) => (
          <li key={sha1}>
            <RevisionLink
              file={file}
              sha1={sha1}
              date={date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function RevisionLink({ file, sha1, date }) {
  return (
    <a href={ghHistoryLink(file, sha1)}>
      {date ? `${formatTime(date)} - ` : ''}{sha1}
    </a>
  );
}

export default Revisions;
