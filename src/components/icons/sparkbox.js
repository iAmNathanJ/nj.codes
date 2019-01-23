import React from 'react';
import { icon, white } from '../../styles';

export const IconSparkbox = ({ size = 50, color = white }) => (
  <svg css={icon} width={size} height={size} viewBox="0 0 512 512">
    <title>Sparkbox</title>
    <path fill={color} d="M432.08,249.1H144.93l179.37-121-54.61,92.68h0a2.93,2.93,0,0,0-.35,1.38,2.88,2.88,0,0,0,2.88,2.88h21.7v0h51.5l.9,0a50.09,50.09,0,0,0,6.38-99.77l36.63-62.17A2.87,2.87,0,0,0,387,58.62a2.84,2.84,0,0,0-1.63.51h0L351.49,81.95l0,0-63.62,42.91H142.32a2.87,2.87,0,0,0-2.86,2.74V225l-62,41.84a2.87,2.87,0,0,0,1.45,5.36h31.82l.07,0H366.08L200.32,383.95l49-83.18a3.32,3.32,0,0,0,.56-1.7,2.86,2.86,0,0,0-2.78-2.86H142.32a2.86,2.86,0,0,0-2.86,2.87h0v94.41h0a2.87,2.87,0,0,0,2.81,2.86h24l-31,52.56h0a2.83,2.83,0,0,0-.49,1.6,2.87,2.87,0,0,0,4.54,2.34l83.72-56.47H346.32a50.1,50.1,0,0,0,19.47-96.25l67.6-45.59a2.88,2.88,0,0,0-1.31-5.43ZM346,147.94h.29a27,27,0,0,1,0,54.06l-.29,0-38.54,0,31.85-54.06Zm-183.54,0h91.2l-91.2,61.52Zm0,225.36V319.23h49.19L179.85,373.3Zm210.86-27a27,27,0,0,1-27,27v0h-89l80.13-54h8.89A27,27,0,0,1,373.36,346.28Z" />
  </svg>
);
