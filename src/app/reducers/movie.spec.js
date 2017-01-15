import reducer from './movie';
import * as actions from '../constants/actions';

describe('movie reducer', () => {

  it('should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        fetchedInformation: false,
        information: null
      }
    );

  });

  it('should handle fetch movie information request', () => {

    expect(reducer(undefined, { type: actions.FETCH_MOVIE_INFORMATION_REQUEST })).toEqual(
      {
        isFetching: true,
        fetchedInformation: false,
        information: null
      }
    );

  });

  it('should handle fetch movie information success', () => {

    const payload = [{name: 'movie name'}];

    expect(reducer(undefined, { type: actions.FETCH_MOVIE_INFORMATION_SUCCESS, payload })).toEqual(
      {
        isFetching: false,
        fetchedInformation: true,
        information: payload
      }
    );

  });

  it('should handle fetch movie information failure', () => {

    expect(reducer(undefined, { type: actions.FETCH_MOVIE_INFORMATION_FAILURE })).toEqual(
      {
        isFetching: false,
        fetchedInformation: false,
        information: null
      }
    );

  });

});
