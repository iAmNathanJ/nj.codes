import { css } from '@emotion/core';
import { borderRadius, black, bps, bpm } from '../styles';
import { rhythm } from '../utils';

export const articleTile = css`
  position: relative;
  margin-bottom: 1rem;
  z-index: -1;
  color: var(--heading);
  font-weight: 900;
  text-transform: uppercase;
  --shadow-length: 16;

  span {
    position: relative;
    padding-right: 0.25ch;

    &::before {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: var(--bg);
      z-index: -1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--accent);
    border-radius: ${borderRadius};
    z-index: -1;
  }
`;

export const articleMeta = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${rhythm(1)} 0 ${rhythm(1.666)};
  font-weight: 100;

  time {
    flex-basis: 100%;
    text-align: right;
    font-size: 1rem;
  }

  .edit-link {
    display: inline-flex;
    align-items: center;

    @media(min-width: ${bps}) {
      justify-content: flex-end;
    }
  }
`;

export const articleSubtitle = css`
  display: block;
  margin-bottom: ${rhythm(1)};
  font-size: 2em;
  font-family: 'Covered By Your Grace';
  font-weight: 400;
  line-height: 1;
`;

export const articleRevisions = css`
  position: relative;
  flex-basis: 100%;
  flex-grow: 1;
  text-align: left;

  @media(min-width: ${bps}) {
    flex-basis: unset;
    margin-left: 2rem;
    text-align: right;
  }

  ul {
    position: absolute;
    left: 0;
    margin: 0;
    padding: 1em 0;
    list-style: none;
    background-color: var(--black-overlay);
    border-radius: ${borderRadius};

    @media(min-width: ${bps}) {
      left: auto;
      right: 0;
    }

    li {
      margin: 0;
      padding: 0 1em;
      text-align: justify;
    }
  }
`;

export const article = css`
  h2 {
    text-shadow: -1px 1px 1px ${black};
    margin-bottom: 0.75em;
  }

  @media(max-width: ${bpm}) {
    .anchor {
      margin-left: 0;
    }

    svg {
      visibility: visible !important;
    }
  }
`;

export const lineNumbers = css`
  display: none;
  position: absolute;
  top: 1rem;
  right: 100%;
  padding-right: 0.75em;
  height: calc(100% - 2rem);
  overflow: hidden;
  text-align: right;
  color: var(--compliment);
  user-select: none;

  @media (min-width: ${bps}) {
    display: block;
  }
`;

export const comments = css`
  .timeline-comment .avatar {
    padding: 1em;
  }
`;
