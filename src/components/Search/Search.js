import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { LIST_LANGUAGES } from '../../GraphQL/queries';
const Search = () => {
  const [language, setLanguage] = useState();
  const { data, loading, error } = useQuery(LIST_LANGUAGES);
  useEffect(() => {
    if (data) {
      setLanguage(data);
    }
  }, [data]);
  console.log(data)
  if (error) console.log(error.message)
  if(loading) return <p>loading....</p>
  return (
    <select className='form-control' value={language} onChange={(e) => setLanguage(e.target.value)}>
      {data.languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.name}
        </option>
      ))}
    </select>
  );
};

export default Search;
