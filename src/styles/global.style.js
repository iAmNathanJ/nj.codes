import { Global, css } from '@emotion/core';
import { rhythm } from '../utils';
import {
  borderRadius,
  whiteSoft,
  gray,
  grayDark,
  blueLight,
  blueText,
  blueMuted,
  redSaturated,
  red,
  pink,
  green,
  black,
  blackLight,
  blackCompliment,
  blackComplimentLighter
} from './variables.style'

const global = css`
  :root {
    --bg: ${blackLight};
    --text: ${whiteSoft};
    --heading: ${gray};
    --backdrop: rgba(${blackLight}, 0.7);
    --backdrop-hover: rgba(${black}, 0.5);
    --menu-btn: ${gray};
    --menu-btn-bg: ${blackCompliment};
    --menu-item: ${gray};
    --text-blue: ${blueLight};
    --text-blue-muted: ${blueMuted};
    --accent: ${red};
    --compliment: ${blackCompliment};
    --compliment-light: ${blackComplimentLighter};
    --meta: ${gray};
    --shadow-color: var(--compliment);
    --black: ${black};
  }

  code {
    --keyword: ${blueLight};
    --function: ${red};
    --function-variable: ${pink};
    --class-name: ${green};
    --operator: ${pink};
    --punctuation: ${grayDark};
    --string: ${gray};
    --number: ${blueText};
    --boolean: ${redSaturated};
    --comment: ${blackComplimentLighter};

    --selector: ${pink};
    --property: ${blueText};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: ${rhythm(1.5)} 0;
    color: var(--text);
    background-color: var(--bg);
  }

  a {
    color: var(--text-blue);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.anchor path {
      fill: ${gray};
    }
  }

  hr {
    margin: 2em 0;
    height: 2px;
    background-color: var(--compliment);
    border: 0;
  }

  blockquote {
    position: relative;
    margin-left: 0;
    margin-right: 0;
    padding-left: 1em;
    font-style: italic;
    font-weight: 300;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: var(--accent);
      border-radius: ${borderRadius};
    }
  }

  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }

  .site-title {
    font-size: 0.75rem;
  }

  .site-title,
  .site-footer {
    font-family: 'Fira Code', 'Operator Mono', courier, monospace;
    color: var(--accent);

    &__link {
      color: var(--accent);
    }
  }

  .site-footer {
    font-size: 0.75em;
  }
`;

export const GlobalStyles = () => <Global styles={global} />;
