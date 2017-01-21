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
          <h3>Genres</h3>
          {this.props.info.genres &&
            <ul className="genre">
            {this.props.info.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        }
          <h2>Facts</h2>
          <div>
            <h4>Status</h4>
            {this.props.info.status}
            <h4>Homepage</h4>
            <a href={this.props.info.homepage}>{this.props.info.homepage}</a>
            <h4>Runtime</h4>
            {this.props.info.runtime}
          </div>
        </div>

      </div>
    )
  }
}
