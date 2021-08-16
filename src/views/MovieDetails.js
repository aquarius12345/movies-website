import Bluebird from 'bluebird'
import { BackgroundColor, Color } from 'jest-matcher-utils/node_modules/chalk'
import React, { Component } from 'react'
import styled from 'styled-components'





class MovieDetails extends Component {
    
    
    render() {
        return (
            <Container>
                <h2>nome do filme</h2>
            </Container>
        
        )
    }
}

const Container = styled.div `
   height: 500px;
   background-color: black;

  


`;


export default MovieDetails;
