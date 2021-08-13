import axios from 'axios';
import React from 'react';
import GenreCard from '../components/GenreCard';
import './Recommend.css';
import './RecSearch.css';


class RecSearch extends React.Component {
  
  state = {
    data: []
  };

  componentDidMount() {
    const firstrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=1";
    const secondrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=11";
    const thirdrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=3";
    const fourthrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=4";
    const fifthrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=5";
    const sixthrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=6";
    const seventhrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=7";
    const eightrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=8";
    const ninethrequest = "https://api.themoviedb.org/3/movie/top_rated?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=9";
    


    axios.all([axios.get(firstrequest),
           axios.get(secondrequest),
           axios.get(thirdrequest),
           axios.get(fourthrequest),
           axios.get(fifthrequest),
           axios.get(sixthrequest),
           axios.get(seventhrequest),
           axios.get(eightrequest),
           axios.get(ninethrequest)])
     .then(axios.spread((firstResponse, secondResponse, thirdResponse, fourthResponse, fifthResponse, sixthResponse, seventhResponse, eightResponse, ninethResponse) => {  
        //console.log(firstResponse.data.results,secondResponse.data.results, thirdResponse.data.results);
        this.setState ({
          data: [...firstResponse.data.results, ...secondResponse.data.results, ...thirdResponse.data.results, 
                ...fourthResponse.data.results, ...fifthResponse.data.results, ...sixthResponse.data.results, 
                ...seventhResponse.data.results, ...eightResponse.data.results, ...ninethResponse.data.results]
        });
     }));
  
  };


  render() {
    //console.log('this is data', this.state.data);
    return (
      <div className="search-width">
        <GenreCard data={this.state.data} genre="Recommend" genreNum={35}/>
      </div>
    );
  };
};

export default RecSearch;