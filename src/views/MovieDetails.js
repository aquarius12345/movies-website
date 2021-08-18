import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'





class MovieDetails extends Component {
    state = {
        movies:[]
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=34c0e6ee9353d4514d2f2c4122f49ae3&language=en-US
        `)
         .then((result)=> {
             console.log(result)
            this.setState({
                movies:result.data
            })
        })
           

      }
        
    
    render() {
        return (
            <Card>
                <h2>{this.state.movies.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.movies.backdrop_path}`} alt="postermovie"/>
                
            </Card>
        
        )
    }
}

const Card = styled.div `
   height: 700px;
   background: black;
   

  h2{
      color: tomato;
      padding-top: 50px;
  }
  
      
  }

`;


export default MovieDetails;
