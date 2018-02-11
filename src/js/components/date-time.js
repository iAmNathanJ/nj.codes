import React from 'react';
import { leadingZero } from 'helpers/formatting';

const DateTime = ({ dateTime }) => {
  const date = new Date(dateTime);
  const y = date.getFullYear();
  const m = leadingZero(date.getMonth() + 1);
  const d = leadingZero(date.getDate() + 1);
  return <time dateTime={dateTime}><strong>{`${y}.${m}.${d}`}</strong></time>;
};

export default DateTime;
