import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReview: false
    }
    this.showReview = this.showReview.bind(this);
  }
  showReview() {
    this.setState({
      showReview: !this.state.showReview
    });
  };
  render() {
    return (
      <div className="row movie">
        <div className="left">
          <img src={this.props.movie['cover-url']} alt="Movie cover" />
        </div>
        <div className="right">
          <div className="row movie-header">
            <span>{this.props.movie.id}.&nbsp;</span>
            <a href={this.props.movie.url}>
              <span className="movie-title">{this.props.movie.title}&nbsp;</span>
            </a>
            <span className="movie-year">({this.props.movie.year})</span>
          </div>
          <p>{this.props.movie.synopsis}</p>
          { this.state.showReview ?
            <div className="row">
              <h4>Review</h4>
              <div>{this.props.review[0].review}</div>
              <button className="btn btn-default" onClick={this.showReview}>Close Review</button>
            </div> :
            <button className="btn btn-primary" onClick={this.showReview}>Read Review</button>
          }
        </div>
      </div>
    )
  }
}

export default Movie;