import React, {Component} from 'react';

export default class Header extends Component {
  render() {

    let image = null;

    if (this.props.info.poster_path) {
      image = <img src={"https://image.tmdb.org/t/p/w300/" + this.props.info.poster_path} />
    }
    else {
      image = <img src="http://placehold.it/300x450?text=No%20Image" />
    }

    return (
      <div className="movie__header">

        <div className="movie__header__poster">
          {image}
        </div>

        <div className="movie__header__info">
          <h1>{this.props.info.title} ({this.props.info.release_date.split('-')[0]}) <span className="movie__header__rating">&#9733; {this.props.info.vote_average}</span></h1>
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

          <div className="movie__header__facts__left">
            <h4>Status</h4>
            {this.props.info.status}
            <h4>Homepage</h4>
            <a href={this.props.info.homepage} target="_blank">{this.props.info.homepage}</a>
            <h4>Budget</h4>
            <span>${this.props.info.budget.toLocaleString()}</span>
          </div>

          <div className="movie__header__facts__right">
            <h4>Cast</h4>
            {this.props.info.credits.cast.slice(0, 10).map(cast => (
              <div key={cast.cast_id}>{cast.name}</div>
            ))}
          </div>
        </div>

      </div>
    )
  }
}
