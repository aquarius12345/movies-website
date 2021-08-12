import React from 'react';
import Recommend from './Recommend';
import axios from 'axios';


class NowPlaying extends React.Component {

  state = {
    data: []
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=1")
    .then((result)=>{
        //console.log('this is result', result)
      this.setState({
        data: result.data.results
      });
    });
  };
  

  render() {
    return(
      <div className="now-marg">
        <Recommend name="Now Playing" data={this.state.data} link="nowplaying"/>
      </div>
    );
  };
};

export default NowPlaying;