import React, {Component} from 'react';

export default class SearchResult extends Component {
  render () {
    return (
      <div className="search__item">
        <div className="search__item__title">{this.props.movie.title}</div>
        <div className="search__item__release">{this.props.movie.release_date}</div>
      </div>
    )
  }
}
