import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DropdownS.css';


class DropdownS extends React.Component {
  
    constructor(props) {
        super(props);
        //console.log('this is props', props);
        this.state = {
            data: [],
            input: ''
        };
    };
      
    
      componentDidUpdate(prevState) {
        if (this.state.input !== prevState.input){
          return this.getData();
        };  
      };
      
    
      getData = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8011d764f63852f7bf4dda520102d6c9&language=en-US&query=${this.state.input}&page=1&include_adult=false`)
          .then((result)=>{
            //console.log('this is', result)
            this.setState({
              data: result.data.results
            });
          });
      };

      handleInputChange = (event) => {
        let value = event.target.value
        
        this.setState({
          input: value,
        }); 
      };

     
    render() {
      const slicedData = this.state.data.slice(0, 5);

      return (
        <div>
          <div className="principal">
      
            <form autoComplete="off">
              <img id="d-icon" src="https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-1.jpg"/>
              <input type="search" id="d-search" value={this.state.input} placeholder="search" onChange={this.handleInputChange}/> 
            </form>

            <ul className="d-container">

              {this.state.input === '' ? [] : slicedData.map((el)=> 
               
                <Link style={{color: "white", textDecoration: "none"}} to={`/movie-details/${el.id}`}>
                  <li key={el.id} className="d-card">
                  {el.poster_path === null ? <img className="d-img" src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"/>
                  :
                  <img className="d-img" src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}/> 
                  } 
                  <span id="d-span">{el.title}</span>
                  </li>
                </Link>
              
              )}

            </ul>
            
          </div> 
        </div>
      );
    };
    
     
}

export default DropdownS;