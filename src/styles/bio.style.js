import { css } from '@emotion/core';
import { borderRadius, blackCompliment } from './variables.style';
import { rhythm, scale } from '../utils';

export const bio = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rhythm(0.5)};
  margin: ${rhythm(2)} 0;
  background-color: ${blackCompliment};
  border-radius: ${borderRadius};
  font-weight: 300;

  p {
    font-size: 0.75rem;
    margin: 0;
  }
`;
