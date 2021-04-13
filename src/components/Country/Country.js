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
      <h2>{data.country.name} {data.country.emoji}</h2>
      <div className='country'>
        <p><span>code:</span> {data.country.code}</p>
        <p><span>capital:</span> {data.country.capital}</p>
        <p><span>Currency:</span> {data.country.currency}</p>

        <h3><span>languages:</span></h3>
        <div className="datas-language">
        <table>
          <th>Language</th>
          <th>Code</th>
            <tbody>
            {data.country.languages.map((language) => (
              <tr>
                <td>{language.name}</td>
                <td>{language.code}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
      <Link to={`/pays`}><span>trouver un autre pays ?</span></Link>
    </div>
  );
};

export default Country;
