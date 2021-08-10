import React from 'react';
import { Link } from 'react-router-dom';


function GenreCard(props) {
  let filtered = props.data.filter((el)=>el.genre_ids[0] === props.genreNum).slice(0,9);

  console.log('data', props.data);
  console.log('filtered', filtered);
  
  
  return(

    <div className="rec">
      <h2 id="recommend">{props.genre}</h2>
      <div className="list-img">
      {filtered.map((el)=> <div id="img-container">
      <Link to={`/movie-details/${el.id}`}>
        <img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}/>
      </Link> 
      <div className="span-container">
        <span id="rec-vote">{"⭐"}{el.vote_average}</span>
      <Link to={`/movie-details/${el.id}`}>
        <span id="rec-title">{el.original_title}</span>
      </Link>
      </div>
      </div>)}
    </div>  
  </div>
  );
};

export default GenreCard;
