import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';


function Banner() {
  return(
    <div>
      <div className="banner">
        <h1 id="banner-title">FIND YOUR NEXT<br/>FAVORITE MOVIE HERE<br/>
        <Link style={{ textDecoration: 'none' }} to="/search" id="banner-btn">SEARCH</Link>
        </h1>
      </div>
      <img id="ban-img" src="https://thegeekiverse.com/wp-content/uploads/2018/04/avengers-header.jpg" alt="avengers"/>
    
    </div>
    
  );
};

export default Banner;