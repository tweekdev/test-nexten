import React from 'react';
import './Home.css';
import './Search';
const Home = (countries) => {
  return (
    <div className='main-home'>
      <section className='container'>
        <div className='home-push last-home'>
          <input type='text' value={countries.name}></input>
        </div>
      </section>
    </div>
  );
};

export default Home;
