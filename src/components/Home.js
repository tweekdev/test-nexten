import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { LIST_COUNTRIES } from '../GraphQL/queries';
import Countries from './Countries/Countries';
import './Home.css';
import './Search';
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);
  if (error) return <div>Error...</div>;

  return (
    <div className='container'>
      <h1>Countries</h1>
      <input
        className='form-control'
        placeholder='recherche'
        type='text'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <div className>loading...</div>
      ) : (
        <div className='datas'>
          {countries
            ? countries
                .filter((val) => {
                  if (searchTerm === '') {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((country, i) => (
                  <Countries
                    name={country.name}
                    emoji={country.emoji}
                    code={country.code}
                    native={country.native}
                  ></Countries>
                ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
