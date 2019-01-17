export function getRevisionLandmarks(revisions = []) {
  const [ latestRevision, ...pastRevisions ] = revisions;

  return {
    latestRevision,
    pastRevisions
  };
}
