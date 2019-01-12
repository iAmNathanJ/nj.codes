import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

export const contain = css`
  margin: 0 auto;
  padding: 0 ${rhythm(0.5)};
  max-width: ${rhythm(24)};
`;

export const flexRow = css`
  display: flex;
  align-items: center;
`;

export const btnReset = css`
  border: none;
  margin: 0;
  padding: 0.25em 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  font-smoothing: inherit;
  appearance: none;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}
`;
