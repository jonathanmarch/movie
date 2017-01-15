import reducer from './search';
import * as actions from '../constants/actions';

describe('search reducer', () => {

  it('should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        query: '',
        searchResults: []
      }
    );

  });

  it('should handle update query', () => {

    const query = 'test';

    expect(reducer(undefined, { type: actions.UPDATE_SEARCH_QUERY, payload: query })).toEqual(
      {
        isFetching: false,
        query,
        searchResults: []
      }
    );

  });

  it('should handle clear search results', () => {

    const results = [
      1,2,3,4,5
    ];


    const state = {
      isFetching: false,
      query: '',
      searchResults: results
    };

    expect(reducer(state, { type: actions.CLEAR_SEARCH_RESULTS })).toEqual(
      {
        isFetching: false,
        query: '',
        searchResults: []
      }
    );

  });

  it('should handle fetch search results request', () => {

    expect(reducer(undefined, { type: actions.FETCH_SEARCH_RESULTS_REQUEST })).toEqual(
      {
        isFetching: true,
        query: '',
        searchResults: []
      }
    );

  });

  it('should handle fetch search results success', () => {

    const payload = [{name: 'movie name'}];

    expect(reducer(undefined, { type: actions.FETCH_SEARCH_RESULTS_SUCCESS, payload })).toEqual(
      {
        isFetching: false,
        query: '',
        searchResults: payload
      }
    );

  });

  it('should handle fetch search results failure', () => {

    expect(reducer(undefined, { type: actions.FETCH_SEARCH_RESULTS_FAILURE })).toEqual(
      {
        isFetching: false,
        query: '',
        searchResults: []
      }
    );

  });

});
