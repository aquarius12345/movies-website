import React from 'react';
import './Recommend.css';


function Recommend(props) {
  const newData = props.data.slice(0, 9);
  return(
    <div className="rec">
      <h2 id="recommend">{props.name}</h2>
      <div className="list-img">
        {newData.map((el)=> <div id="img-container"><img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}/>
        <span id="rec-vote">{"⭐"}{el.vote_average}</span>
        <span id="rec-title">{el.original_title}</span>
        </div>)}
      </div>
      
    </div>
  );
};

export default Recommend;