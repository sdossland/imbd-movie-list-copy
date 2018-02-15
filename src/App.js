import React, { Component } from 'react';
import MovieList from './MovieList';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movie Reviews</h1>
        <MovieList movies={data.movies} reviews={data.reviews} />
      </div>
    );
  }
}

export default App;
