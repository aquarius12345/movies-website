import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CarousselPop(props) {

  return(
    <div>
      <Carousel>
        {props.data.map((el)=> 
          <Carousel.Item>
          <Link to={`/movie-details/${el.id}`}>
            <img
            className="d-block w-100"
            src= {`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
            alt={el.name}
            />
          </Link>
          <Carousel.Caption>
            <div id="caroussel-now">
              <h3>{el.original_title}</h3>
              <p>{el.overview}</p>
            </div>
          </Carousel.Caption>
          </Carousel.Item>
        )} 
      </Carousel>
    </div>
  );
};

export default CarousselPop;