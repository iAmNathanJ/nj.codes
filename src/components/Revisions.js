import React, { Fragment, useState } from 'react';
import { getRevisionLandmarks, ghHistoryLink, formatTime } from '../utils';
import { btnReset } from '../styles';

const Revisions = ({ revisions, file }) => {
  const [ open, setOpen ] = useState(false);
  const { latestRevision, pastRevisions } = getRevisionLandmarks(revisions);

  const toggle = () => {
    setOpen(open => !open);
  }

  return (
    <div>
      <a href={ghHistoryLink(file, latestRevision.sha1)}>
        {latestRevision.sha1}
      </a>
      <br/>
      {pastRevisions.length > 1 && (
        <Fragment>
          <button
            aria-label={`${open ? 'close' : 'open'} history`}
            css={btnReset}
            onClick={toggle}
          >
            {open ? '-' : '+'} history
          </button>
          <ul hidden={!open}>
            {[...pastRevisions].map(({ sha1, date }) => (
              <li key={sha1}>
                <a href={ghHistoryLink(file, sha1)}>
                  {formatTime(date)} - {sha1}
                </a>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
};

export default Revisions;
