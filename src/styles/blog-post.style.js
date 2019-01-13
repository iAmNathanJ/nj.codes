import { css } from '@emotion/core';
import { borderRadius, black } from '../styles';
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
    padding-right: 0.5ch;

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

export const articleSubtitle = css`
  display: block;
  flex-basis: 360px;
  font-size: 2em;
  font-family: 'Covered By Your Grace';
  font-weight: 400;
`;

export const articleMeta = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(1.666)};
  font-weight: 100;

  time {
    flex-basis: 100%;
    text-align: right;
  }
`;

export const article = css`
  h2 {
    text-shadow: -1px 1px 1px ${black};
    margin-bottom: 0.75em;
  }

  @media(max-width: 780px) {
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

  @media (min-width: 480px) {
    display: block;
  }
`;
