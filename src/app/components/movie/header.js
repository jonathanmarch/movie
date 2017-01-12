import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="movie__header">
        <h1>{this.props.info.title} ({this.props.info.vote_average})</h1>
        <p>{this.props.info.overview}</p>
      </div>
    )
  }
}
