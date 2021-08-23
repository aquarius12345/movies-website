import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import DropdownS from './DropdownS';



function Banner() {
  return(
    <div>
      <div className="banner">
        <h1 id="banner-title">FIND YOUR NEXT<br/>FAVORITE MOVIE HERE<br/>
        <Link style={{ textDecoration: 'none' }} to="/search" id="banner-btn">SEARCH</Link>
        <Link style={{textDecoration: 'none'}} to="/my-list" id="my-btn">MYLIST</Link>
        </h1>
      </div>
      <img id="ban-img" src="https://thegeekiverse.com/wp-content/uploads/2018/04/avengers-header.jpg" alt="avengers"/>

      <DropdownS/>
    
    </div>
    
  );
};

export default Banner;