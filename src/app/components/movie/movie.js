import React, {Component} from 'react';
import {connect} from 'react-redux';


import {fetchMovieInformation} from '../../actions/movie';

import Header from './header';

class Movie extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.params.id;
    dispatch(fetchMovieInformation(id));
  }

  render () {
    if (this.props.movie.fetchedInformation) {
      return (
        <div>
          <Header info={this.props.movie.information} />
        </div>
      )
    } else {
      return <div>loading..</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
};

export default connect(mapStateToProps)(Movie);
