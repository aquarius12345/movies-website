import axios from 'axios';
import React, { Component } from 'react';
import './MoviesDetails.css';





class MovieDetails extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=34c0e6ee9353d4514d2f2c4122f49ae3&append_to_response=videos,images
        `)
            .then((result) => {
                console.log(result)
                this.setState({
                    movies: result.data
                })
            })


    }

    


    render() {
        return (
            <div className='view'>
                <div className="card-details">
                    <h2>{this.state.movies.title}</h2>
                    <p><span>Release: {this.state.movies.release_date},
                        Minutes: {this.state.movies.runtime}
                    </span></p>


                    <div className='card-poster'>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w300/${this.state.movies.poster_path}`} alt="postermovie" />

                        </div>
                        <div className="trailer">
                            <img src={`https://image.tmdb.org/t/p/original/${this.state.movies.backdrop_path}`} alt="postermovie" />

                        </div>

                        <div className='rating'>
                            <h3>RATING: {this.state.movies.vote_average}</h3> 
                            {this.state.movies.genres}
                            
                            
                            
                           
                        </div>

                    </div>

                    <div className='overview'>

                        <h3>Overview:</h3>
                        <p>{this.state.movies.overview}</p>


                    </div>
                </div>
            </div>


        )
    }
}


export default MovieDetails;
