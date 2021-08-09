import React from 'react';
import Recommend from './Recommend';
import axios from 'axios';

class Popular extends React.Component {
  
  state = {
    data: []
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&page=2")
    .then((result)=>{
      this.setState({
        data: result.data.results
      })
    })
  }

  render() {
    return (
      <Recommend name="Popular" data={this.state.data}/>
    );
  };
};

export default Popular;