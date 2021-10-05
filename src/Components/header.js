import React, { Component } from 'react';

//Inherits from component
class Header extends Component 
{
//Call render method
    render(){
        return(
            <div>
                <h1>This is my Header component.</h1>
            </div>
        );
    }
}
//sets up code to be imported
export default Header;