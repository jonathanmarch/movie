import {API_POPULAR_MOVIES} from '../../constants/api';
import * as actions from '../../constants/actions';
import {fetchStatusHandler} from '../../helpers/statushandler';

export function fetchPopularMoviesRequest() {
  return {
    type: actions.FETCH_POPULAR_MOVIES_REQUEST
  }
}

export function fetchPopularMoviesSuccess(movies) {
  return {
    type: actions.FETCH_POPULAR_MOVIES_SUCCESS,
    payload: movies
  }
}

export function fetchPopularMoviesFailure(ex) {
  return {
    type: actions.FETCH_POPULAR_MOVIES_FAILURE,
    ex
  }
}

export function fetchPopularMovies() {
  return dispatch => {
    dispatch(fetchPopularMoviesRequest());
    return fetch(API_POPULAR_MOVIES)
    .then(fetchStatusHandler)
    .then(response => response.json())
    .then(json => dispatch(fetchPopularMoviesSuccess(json.results)))
    .catch(ex => dispatch(fetchPopularMoviesFailure(ex)));
  }
}
