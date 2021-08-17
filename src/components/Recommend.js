import React from 'react';
import { useRef } from 'react';
import './Recommend.css';
import { Link } from 'react-router-dom';


function Recommend(props) {
  // const newData = props.data.slice(0, 9);
  const rec = useRef(null);
  //console.log(rec);

  const handleLeftClick = (e) => {
    e.preventDefault();
    //console.log(rec.current.offsetWidth);
    rec.current.scrollLeft -= rec.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    //console.log(rec.current.offsetWidth);
    rec.current.scrollLeft += rec.current.offsetWidth;
  }


  return(
    <div>
      <Link style={{ textDecoration: 'none' }} to={`/${props.link}`}><h2 id="recommend">{props.name}</h2></Link>
      
      <div className="rec" ref={rec}>
        <div className="list-img">
          {props.data.map((el)=> <div id="img-container">
          <Link style={{ textDecoration: 'none' }} to={`/movie-details/${el.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}/>
          </Link> 
          <div className="span-container">
            {/* <span id="rec-vote">{"⭐"}{el.vote_average}</span> */}
          <Link style={{ textDecoration: 'none' }} to={`/movie-details/${el.id}`}>
            <span id="rec-vote">{"⭐"}{el.vote_average}</span>
            <span id="rec-title">{el.original_title.length > 30 ? el.original_title.slice(0,30)+"...":el.original_title}</span>
          </Link>
          </div>
          </div>)}
        </div>  
      </div>
      <div className="rec-buttons">
        <button id="btn-left" onClick={handleLeftClick}>{'<'}</button>
        <button id="btn-right" onClick={handleRightClick}>{'>'}</button> 
      </div>
    </div>
  );
};

export default Recommend;