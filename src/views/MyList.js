import React from 'react';
import './MyList.css';


class MyList extends React.Component {

  state = {
    Allmovies: this.readAll()
  }
  
  readAll() {
    let keys =Object.keys(localStorage);
    return keys.map((el)=> JSON.parse(localStorage.getItem(el)))
  }

  removeMovie(key, el) {
    localStorage.removeItem(key, el);
    this.setState({
      Allmovies: this.readAll()
    });
  };
  

  render() {
    return (
      <div>
        <h2 className="my">My List</h2>
        <div className="myl-container">
          {this.state.Allmovies.map((el)=>
          <div key={el.id} className="mylist-card">
           
           <img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}/>
           <p id="myl-p">{el.title}</p>
  
           <button id="mylist-btn" onClick={()=>{this.removeMovie(el.title, el)}}>REMOVE</button>
  
          </div>)
          }
        </div>
      </div>
    );
  };  
};

export default MyList;