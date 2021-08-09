import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import NowPlaying from '../components/NowPlaying';
import TopRated from '../components/TopRated';
import Popular from '../components/Popular';


function Home() {
  return (
    <div className="home">
      
      <Banner/>
      <NowPlaying/>
      <Popular/>
      <TopRated/>

    </div>
    
  );
};

export default Home;