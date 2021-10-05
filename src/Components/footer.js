import React, { Component } from 'react';

//Inherits from component
class Footer extends Component 
{
//Call render method
    render(){
        return(
            <div>
                <h1>My Footer in another component.</h1>
            </div>
        );
    }
}
//sets up code to be imported
export default Footer;