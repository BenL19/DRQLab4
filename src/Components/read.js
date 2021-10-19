import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

//Inherits from component
class Read extends Component 
{
    // Method called when component becomes visible
    componentDidMount(){
        // Retrieve information from this link using http request
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        // Function executes after get
        // Update this array with data received
        .then((response)=>{
                this.setState({ mymovies: response.data.movies})
            })
        // Catch exceptions
        .catch((error)=>{
            console.log(error);
        });
    }

    //Stores data for the component
    state = {
        mymovies: []
    };

//Call render method
    render(){
        return(
            <div>
                <h3>Hello from read component</h3>
                {/* Pass data from read into embedded component movies */}
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
//sets up code to be imported
export default Read;