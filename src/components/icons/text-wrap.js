import React from 'react';
import { icon, white } from '../../styles';

export const IconTextWrap = ({ size = 18, color = white }) => (
  <svg css={icon} width={size} height={size} viewBox="0 0 18 18">
    <path fill={color} d="M16 3H2v2h14V3zM2 15h4v-2H2v2zm11.5-7H2v2h11.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H11v-2l-3 3 3 3v-2h2.5c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8z" />
  </svg>
);
