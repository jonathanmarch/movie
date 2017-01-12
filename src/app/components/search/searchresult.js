import React, {Component} from 'react';
import { withRouter } from 'react-router';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    var id = this.props.movie.id;
    this.props.router.push(`/movie/${id}`);
  }
  render () {
    return (
      <div className="search__item" onClick={this.onClick.bind(this)}>
        <div className="search__item__title">{this.props.movie.title}</div>
        <div className="search__item__release">{this.props.movie.release_date}</div>
      </div>
    )
  }
}

export default withRouter(SearchResult);
