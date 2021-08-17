import React from 'react';
import reactDom from 'react-dom';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './GenreCard';


function GenreCard(props) {
  // let filtered = props.data.filter((el)=>el.genre_ids[0] === props.genreNum).slice(0,9);
  let filtered = props.data.filter((el)=>el.genre_ids[0] === props.genreNum);

  //console.log('data', props.data);
  //console.log('filtered', filtered);
  const rec = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    rec.current.scrollLeft -= rec.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    rec.current.scrollLeft += rec.current.offsetWidth;
  }
  
  return(
    <>
      <h2 id="genre-name">{props.genre}</h2>
      <div className="rec" ref={rec}>
        <div className="list-img">
          {filtered.map((el)=> <div id="img-container">
          <Link style={{ textDecoration: 'none' }} to={`/movie-details/${el.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}/>
          </Link> 
          <div className="span-container">
            <span id="rec-vote">{"⭐"}{el.vote_average} </span>
          <Link style={{ textDecoration: 'none' , color: 'white'}} to={`/movie-details/${el.id}`}>
            <span id="genre-title">{el.original_title}</span>
          </Link>
          </div>
          </div>)}
        </div>
        <div className="rec-buttons" id="genre-btn">
          <button id="btn-left" onClick={handleLeftClick}>{'<'}</button>
          <button id="btn-right" onClick={handleRightClick}>{'>'}</button> 
        </div>
      </div>
    </>
  );
};

export default GenreCard;
