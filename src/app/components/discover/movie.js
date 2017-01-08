import React, {Component} from 'react';

export default class Movie extends Component {
  render () {
    return (
      <div className="discover__movie">
        <img src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path}/>
        <div className="discover__movie__title">{this.props.movie.title}</div>
      </div>
    )
  }
}
