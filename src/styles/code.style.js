import { css } from '@emotion/core';
import { borderRadius, black, blueMuted, white } from './variables.style';
import { rhythm } from '../utils';

export const code = css`
  pre {
    position: relative;
    margin: 0;
    white-space: pre;
    word-wrap: normal;

    code {
      display: block;
      position: relative;
      padding: 0.875rem;
      overflow-x: scroll;

      &::selection {
        background: ${black};
      }
    }

    .word-wrap & {
      white-space: pre-wrap;
    }
  }

  pre code *::selection {
    background: ${black};
  }

  code {
    font-family: 'Fira Code', 'Operator Mono', courier, monospace;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.65;
    background-color: var(--compliment);

    .keyword {
      color: var(--keyword);
    }
    .function {
      color: var(--function);
    }
    .function-variable {
      color: var(--function-variable);
    }
    .class-name {
      color: var(--class-name);
    }
    .operator {
      color: var(--operator);
    }
    .punctuation {
      color: var(--punctuation);
    }
    .string {
      color: var(--string);
    }
    .number {
      color: var(--number);
    }
    .boolean {
      color: var(--boolean);
    }
    .comment {
      color: var(--comment);
    }
    .selector {
      color: var(--selector);
    }
    .property {
      color: var(--property);
    }
  }

  .language-text {
    font-size: 0.875em;
    padding: 0.125em;
    color: var(--class-name);
  }

  .gatsby-highlight {
    margin: ${rhythm(1)} 0;
    background-color: var(--compliment);
    border-radius: ${borderRadius};
    overflow: hidden;
  }

  .gatsby-highlight-code-line {
    box-sizing: border-box;
    display: block;
    margin-left: -1em;
    margin-right: -1em;
    padding-left: calc(1em - 4px);
    padding-right: 1em;
    background-color: ${black};
    border-left: 4px solid var(--accent);
  }

  .snippet-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.25em 0.875rem;
    font-size: 0.75rem;
    color: var(--heading);
    background-color: var(--compliment-light);

    .btn-wrap {
      padding: 0 0.5em;
      path {
        fill: ${blueMuted};
      }
      .word-wrap & path {
        fill: ${white}
      }
    }
  }
`;
