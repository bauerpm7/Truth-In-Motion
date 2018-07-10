import React, { Component } from 'react';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Coaching from './components/Coaching';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Route 
      		exact 
      		path='/'
      		render={() => (
        		<Home/>
        	)}
        />
        <Route 
      		exact 
      		path='/coaching'
      		render={() => (
        		<Coaching/>
        	)}
        />
      </div>
    );
  }
}

export default App;
