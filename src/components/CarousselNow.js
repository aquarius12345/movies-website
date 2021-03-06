import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarousselNow.css';
import { Link } from 'react-router-dom';

function CarousselNow(props) {

  return(
    <>
      <div>
       
        <Carousel>
          {props.data.map((el)=>
            <Carousel.Item>
            <Link to={`/movie-details/${el.id}`}>
            
             <img
             className="d-block w-100"
             id="car-img-size"
             src= {`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
             alt={el.name}
             />
            
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
        {/* <div className="shadow"></div> */}

      </div>
    </>
  );
};

export default CarousselNow;