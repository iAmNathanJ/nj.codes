import React from 'react';
import { hydrate } from 'react-dom';
import App from 'components/app';

console.log('! main !');

hydrate(<App />, document.querySelector('#root'));
