import React from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';
const Countries = (props) => {
  return (
    <div className='card' key={props.code}>
      <Link to={`/pays/${props.code}`}>
        <p>{props.name}</p>
        <p>{props.emoji}</p>
      </Link>
    </div>
  );
};

export default Countries;
