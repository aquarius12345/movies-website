import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';


function Banner() {
  return(
    <div className="banner">
      <h1 id="banner-title">FIND YOUR NEXT<br/>FAVORITE MOVIE HERE</h1>
      {/* <Link to="/search"><button id="banner-btn">SEARCH</button></Link> */}
      <Link style={{ textDecoration: 'none' }} to="/search" id="banner-btn">SEARCH</Link>
    </div>
  );
};

export default Banner;