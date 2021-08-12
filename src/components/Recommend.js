import React from 'react';
import './Recommend.css';
import { Link } from 'react-router-dom';


function Recommend(props) {
  // const newData = props.data.slice(0, 9);
  return(
    <div className="rec">
      <Link style={{ textDecoration: 'none' }} to={`/${props.link}`}><h2 id="recommend">{props.name}</h2></Link>
      <div className="list-img">
        {props.data.map((el)=> <div id="img-container">
        <Link style={{ textDecoration: 'none' }} to={`/movie-details/${el.id}`}>
          <img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}/>
        </Link> 
        <div className="span-container">
          <span id="rec-vote">{"⭐"}{el.vote_average}</span>
        <Link style={{ textDecoration: 'none' }} to={`/movie-details/${el.id}`}>
          <span id="rec-title">{el.original_title}</span>
        </Link>
        </div>
        </div>)}
      </div>
      
    </div>
  );
};

export default Recommend;