import React, { Component } from 'react';
import MovieItem from './movieItem';

//Inherits from component
class Movies extends Component 
{
//Call render method
    render(){
        // splits the array of movies into individual movies
        return this.props.films.map((film)=>{
            // Returns the contents of the movieItem components, specifically the films
            return <MovieItem film={film}></MovieItem>
        })
    }
}
//sets up code to be imported
export default Movies;