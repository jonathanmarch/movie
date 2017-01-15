import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="movie__header">

        <div className="movie__header__poster">
          <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + this.props.info.poster_path} />
        </div>

        <div className="movie__header__info">
          <h1>{this.props.info.title} ({this.props.info.release_date.split('-')[0]})</h1>
          <h2>Overview</h2>
          <p>{this.props.info.overview}</p>
        </div>

      </div>
    )
  }
}
