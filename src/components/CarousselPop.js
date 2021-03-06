import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CarousselNow.css';



function CarousselPop(props) {

  return(
    <div>
      <Carousel>
        {props.data.map((el)=> 
          <Carousel.Item>
          <Link to={`/movie-details/${el.id}`}>
            <div>
              <img 
              className="d-block w-100"
              src= {`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              alt={el.name}
              />
            </div>
            
          <Carousel.Caption>
            <div id="caroussel-now">
              <h3>{el.original_title}</h3>
              <p>{el.overview.slice(0, 200)}...</p>
            </div>
          </Carousel.Caption>
          </Link>
          </Carousel.Item>
        )} 
        <div className="shadow"></div>
      </Carousel>
    
    </div>
  );
};

export default CarousselPop;