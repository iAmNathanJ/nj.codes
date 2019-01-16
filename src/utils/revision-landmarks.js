export function getRevisionLandmarks(revisions = []) {
  const [ latestRevision, ...pastRevisions ] = revisions;
  // const initialRevision = revisions[revisions.length - 1];
  // const hasBeenRevised = latestRevision !== initialRevision;

  return {
    latestRevision,
    pastRevisions
  };
}
