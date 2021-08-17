import axios from 'axios';
import React from 'react';
import GenreCard from '../components/GenreCard';
import CarousselNow from '../components/CarousselNow';
import './NowPage.css';


class NowPage extends React.Component {
  
  state = {
    data: []
  };

  componentDidMount() {
    const firstrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=1";
    const secondrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=2";
    const thirdrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=3";
    const fourthrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=4";
    const fifthrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=5";
    const sixthrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=6";
    const seventhrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=7";
    const eighthrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=8";
    const ninethrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=9";
    const tenrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=10";
    const elevenrequest = "https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=11";


    axios.all([axios.get(firstrequest),
           axios.get(secondrequest),
           axios.get(thirdrequest),
           axios.get(fourthrequest),
           axios.get(fifthrequest),
           axios.get(sixthrequest),
           axios.get(seventhrequest),
           axios.get(eighthrequest),
           axios.get(ninethrequest),
           axios.get(tenrequest),
           axios.get(elevenrequest)])
     .then(axios.spread((firstResponse, secondResponse, thirdResponse, fourthResponse, fifthResponse, sixthResponse, seventhResponse, eightResponse, ninethResponse, tenResponse, elevenResponse) => {  
        //console.log(firstResponse.data.results,secondResponse.data.results, thirdResponse.data.results);
        this.setState ({
          data: [...firstResponse.data.results, ...secondResponse.data.results, ...thirdResponse.data.results, 
                ...fourthResponse.data.results, ...fifthResponse.data.results, ...sixthResponse.data.results, 
                ...seventhResponse.data.results, ...eightResponse.data.results, ...ninethResponse.data.results,
                ...tenResponse.data.results, ...elevenResponse.data.results]
        });
     }));
  
  };


  render() {
    //console.log('this is data', this.state.data);
    return (
      <div>
       
        <CarousselNow data={this.state.data}/>
        <h1 id="nowpage-title">Now Playing</h1>
    
        <GenreCard data={this.state.data} genre="Science Fiction" genreNum={878}/>
        <GenreCard data={this.state.data} genre="Comedy" genreNum={35}/>
        <GenreCard data={this.state.data} genre="Drama" genreNum={18}/>
        <GenreCard data={this.state.data} genre="Animation" genreNum={16}/>
      
      </div>
    );
  };
};

export default NowPage;