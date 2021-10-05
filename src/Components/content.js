import React, { Component } from 'react';

//Inherits from component
class Content extends Component 
{
//Call render method
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                {/* Writes time to site */}
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
//sets up code to be imported
export default Content;