import { css } from '@emotion/core';

export const icon = css`
  path {
    transition: fill 0.2s;
  }
`;

export const iconLink = css`
  color: var(--text);

  [class*='icon'] {
    margin-left: 0.3rem;
    margin-right: -0.3rem;
  }

  .link-text {
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
