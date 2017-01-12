import {API_MOVIE_INFO_BASE, API_MOVIE_INFO_PARAMS} from '../constants/api';
import * as actions from '../constants/actions';
import {fetchStatusHandler} from '../helpers/statushandler';

export function fetchMovieInformationRequest() {
  return {
    type: actions.FETCH_MOVIE_INFORMATION_REQUEST
  }
}

export function fetchMovieInformationSuccess(information) {
  return {
    type: actions.FETCH_MOVIE_INFORMATION_SUCCESS,
    payload: information
  }
}

export function fetchMovieInformationFailure(ex) {
  return {
    type: actions.FETCH_MOVIE_INFORMATION_FAILURE,
    ex
  }
}

export function fetchMovieInformation(movie) {
  return dispatch => {
    dispatch(fetchMovieInformationRequest());
    return fetch(`${API_MOVIE_INFO_BASE}${movie}${API_MOVIE_INFO_PARAMS}`)
    .then(fetchStatusHandler)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieInformationSuccess(json)))
    .catch(ex => dispatch(fetchMovieInformationFailure(ex)));
  }
}
