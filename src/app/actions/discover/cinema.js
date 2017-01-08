import {API_CINEMA_MOVIES} from '../../constants/api';
import * as actions from '../../constants/actions';
import {fetchStatusHandler} from '../../helpers/statushandler';

export function fetchCinemaMoviesRequest() {
  return {
    type: actions.FETCH_CINEMA_MOVIES_REQUEST
  }
}

export function fetchCinemaMoviesSuccess(movies) {
  return {
    type: actions.FETCH_CINEMA_MOVIES_SUCCESS,
    payload: movies
  }
}

export function fetchCinemaMoviesFailure(ex) {
  return {
    type: actions.FETCH_CINEMA_MOVIES_FAILURE,
    ex
  }
}

export function fetchCinemaMovies() {
  return dispatch => {
    dispatch(fetchCinemaMoviesRequest());
    return fetch(API_CINEMA_MOVIES)
    .then(fetchStatusHandler)
    .then(response => response.json())
    .then(json => dispatch(fetchCinemaMoviesSuccess(json.results)))
    .catch(ex => dispatch(fetchCinemaMoviesFailure(ex)));
  }
}
