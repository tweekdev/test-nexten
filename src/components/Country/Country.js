import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { COUNTRY } from '../../GraphQL/queries';
import './Country.css';
const Country = () => {
  const code = useParams().pays;

  const { loading, error, data } = useQuery(COUNTRY, {
    variables: { code },
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>{data.country.name}</h2>
      <div className='country'>
        <p>code: {data.country.code}</p>
        <p>{data.country.emoji}</p>
        <p>capital: {data.country.capital}</p>
        <p>Currency: {data.country.currency}</p>
        {data.country.languages.map((language) => (
          <>
            <p>Language: {language.name}</p>
            <p>Language code: {language.code}</p>
          </>
        ))}
      </div>
      <Link to={`/pays`}>trouver un autre pays ?</Link>
    </div>
  );
};

export default Country;
