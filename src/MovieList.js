import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    const movies = this.props.movies.map((movie) => {
      return (
        <div key={movie.id}>
          <Movie movie={movie} review={this.props.reviews.filter((review) =>
            review['movie-id'] === movie.id
          )}/>
        </div>
      )
    });
    return (
      <div>{movies}</div>
    );
  }
}

export default MovieList;