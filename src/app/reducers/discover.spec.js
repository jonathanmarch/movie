import reducer from './discover';
import * as actions from '../constants/actions';

describe('discover reducer', () => {

  it('should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        movies: []
      }
    );

  });

  it('should handle fetch popular movies request', () => {

    expect(reducer(undefined, { type: actions.FETCH_POPULAR_MOVIES_REQUEST })).toEqual(
      {
        isFetching: true,
        movies: []
      }
    );

  });

  it('should handle fetch popular movies success', () => {

    const payload = [{name: 'movies'}];

    expect(reducer(undefined, { type: actions.FETCH_POPULAR_MOVIES_SUCCESS, payload })).toEqual(
      {
        isFetching: false,
        movies: payload
      }
    );

  });

  it('should handle fetch popular movies failure', () => {

    expect(reducer(undefined, { type: actions.FETCH_POPULAR_MOVIES_FAILURE })).toEqual(
      {
        isFetching: false,
        movies: []
      }
    );

  });

  it('should handle fetch cinema movies request', () => {

    expect(reducer(undefined, { type: actions.FETCH_CINEMA_MOVIES_REQUEST })).toEqual(
      {
        isFetching: true,
        movies: []
      }
    );

  });

  it('should handle fetch cinema movies success', () => {

    const payload = [{name: 'movies'}];

    expect(reducer(undefined, { type: actions.FETCH_CINEMA_MOVIES_SUCCESS, payload })).toEqual(
      {
        isFetching: false,
        movies: payload
      }
    );

  });

  it('should handle fetch popular movies failure', () => {

    expect(reducer(undefined, { type: actions.FETCH_CINEMA_MOVIES_FAILURE })).toEqual(
      {
        isFetching: false,
        movies: []
      }
    );

  });

});
