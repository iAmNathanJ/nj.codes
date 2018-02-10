import React from 'react';
import { Link } from 'react-router-dom';

const OpenSourceCard = ({ name, desc, url }) => {
  return (
    <div className="open-source-card">
      <h3 className="title"><span>{name}</span></h3>
      <p className="desc">{desc}</p>
      <a href={url} title={name} className="os-link">GitHub</a>
    </div>
  );
}

export default OpenSourceCard;
