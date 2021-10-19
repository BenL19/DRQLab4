import React, { Component } from 'react';

//Inherits from component
class Create extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    // Call when submit button is pressed
    handleSubmit(event) {
        // Log user submitted movie info to console
        console.log("Name: "+this.state.Title+
        " Year: " + this.state.Year +
        " Poster: " + this.state.Poster);
        // Cancels the event if it is cancelable
        event.preventDefault();
        this.setState({
            Title:'',
            Year:'',
            Poster:''
        });
    }
    //Update the state of movie name
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    //Update the state of movie year
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }
    
    //Update the state of movie poster
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    //Call render method
    render() {
        return (
            <div className='App'>
                {/* Form to fill in Movie details */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
//sets up code to be imported
export default Create;