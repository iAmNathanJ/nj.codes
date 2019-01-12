import { css } from '@emotion/core';
import { rhythm } from '../utils';

export const bottomNav = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${rhythm(1)};

  a {
    color: var(--compliment-light);

    &:hover,
    &:focus {
      color: var(--text-blue);
    }
  }
`;
