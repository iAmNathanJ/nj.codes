import { css } from '@emotion/core';

export const icon = css`
  path {
    transition: fill 0.2s;
  }
`;

export const iconLink = css`
  [class*='icon'] {
    margin-left: 0.25em;
  }

  .link-text {
    color: var(--text);
    font-size: 0.75em;
    border-bottom: 1px dashed var(--text);
  }

  &:hover,
  &:focus {
    text-decoration: none;

    .link-text {
      border-bottom-color: var(--accent);
    }

    path {
      fill: var(--accent);
    }
  }
`;
