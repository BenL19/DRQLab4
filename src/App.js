import './App.css';
//importing class react from .js library
import React, { Component } from 'react';
//import Header from components folder
import Header from './Components/header';
//import Content from components folder
import Content from './Components/content';
//import Footer from components folder
import Footer from './Components/footer';
//import Create from components folder
import Create from './Components/create';
//import Read from components folder
import Read from './Components/read';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar, nav and container from bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
//import routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Inheriting from Component
class App extends Component {

  //Wrap return in render method
  //Contains the JSX template of the app
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* Change URL when buttons in navbar are clicked, link to respective pages */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
        {/* Adds Switch so that when a button is pressed, it will only show the content of whatever component is specified for that button */}
        <Switch>
          <Route path='/' component={Content} exact></Route>
          <Route path='/header' component={Header}></Route>
          <Route path='/footer' component={Footer}></Route>
          <Route path='/create' component={Create}></Route>
          <Route path='/read' component={Read}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
