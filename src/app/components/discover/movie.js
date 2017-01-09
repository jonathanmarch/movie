import React, {Component} from 'react';
import { withRouter } from 'react-router';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    var id = this.props.movie.id;
    this.props.router.push(`/movie/${id}`);
  }

  render() {
    return (
      <div className="discover__movie" onDoubleClick={this.onClick.bind(this)}>
        <img src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path}/>
        <div className="discover__movie__title">{this.props.movie.title}</div>
      </div>
    )
  }
}

export default withRouter(Movie);
