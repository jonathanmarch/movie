import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearchQuery, clearSearchResults, fetchSearchResults} from '../../actions/search';

import SearchResult from './searchresult';

let debounce = require('lodash/debounce');

class Search extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { dispatch } = this.props;

    this.debounceOnChange = debounce((value) => {
      dispatch(updateSearchQuery(value));

      if (value.length > 3) {
        dispatch(fetchSearchResults(value));
      } else {
        dispatch(clearSearchResults());
      }

    }, 500);

    document.body.addEventListener('click', this.onClick.bind(this));
  }

  componentWillUnmount () {
    const { dispatch } = this.props;
    dispatch(clearSearchResults());

    document.body.removeEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    const { dispatch } = this.props;
    const className = event.target.className;

    if (className.indexOf('search__') === -1) {
      dispatch(clearSearchResults());
    }
  }

  onChange(event) {
    this.debounceOnChange(event.target.value);
  }

  render () {
    return (
      <div>
        <div className="search">
          <input type="text" className="search__input" placeholder="Search for a movie..." onChange={this.onChange.bind(this)}></input>
          {this.props.search.searchResults && <div className="search__results">
            {this.props.search.searchResults.map(movie => (
              <SearchResult key={movie.id} movie={movie}/>
            ))}
          </div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
};

export default connect(mapStateToProps)(Search);
