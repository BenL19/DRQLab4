import React, { Component } from 'react';
//import React Bootstrap Cards
import Card from 'react-bootstrap/Card';

//Inherits from component
class MovieItem extends Component {
    //Call render method
    render() {
        return (
            <div>
                {/* Put each movie item into a card */}
                <Card>
                    {/* Calls the movie title */}
                    <Card.Header>{this.props.film.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        {/* Calls the movie poster */}
                        <img src={this.props.film.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {/* Calls the movie Year */}
                                <br></br>-{this.props.film.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
//sets up code to be imported
export default MovieItem;