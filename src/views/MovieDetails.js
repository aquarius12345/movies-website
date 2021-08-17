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
                <h2>{this.state.movies.original_title}</h2>
                
                
            </Card>
        
        )
    }
}

const Card = styled.div `
   height: 500px;
  background: white;
  color: black;

`;


export default MovieDetails;
