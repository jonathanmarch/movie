import React, {Component} from 'react';
import {connect} from 'react-redux';
import Movie from './movie';
import Search from '../search/search';

import {fetchCinemaMovies} from '../../actions/discover/cinema';
import {fetchPopularMovies} from '../../actions/discover/popular';

import * as views from '../../constants/views';

class Discover extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCinemaMovies());
  }

  changeFilter(view, e) {
    const { dispatch } = this.props;
    e.preventDefault();

    if (view == views.VIEW_CINEMA_MOVIES) {
      dispatch(fetchCinemaMovies());
    } else if (view == views.VIEW_POPULAR_MOVIES) {
      dispatch(fetchPopularMovies());
    }
  }

  render () {
    return (
      <div>
        <Search />
        <div className="discover__filters">
          <a href="#" onClick={this.changeFilter.bind(this, views.VIEW_CINEMA_MOVIES)}>In Cinema</a> | <a href="#" onClick={this.changeFilter.bind(this, views.VIEW_POPULAR_MOVIES)}>Popular</a>
        </div>
        <div className="discover">
        {this.props.discover.movies.map(movie => (
          <Movie key={movie.id} movie={movie}/>
        ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    discover: state.discover
  }
};

export default connect(mapStateToProps)(Discover);
