import {API_SEARCH} from '../constants/api';
import * as actions from '../constants/actions';
import {fetchStatusHandler} from '../helpers/statushandler';

export function updateSearchQuery(query) {
  return {
    type: actions.UPDATE_SEARCH_QUERY,
    payload: query
  }
}

export function clearSearchResults() {
  return {
    type: actions.CLEAR_SEARCH_RESULTS
  }
}

export function fetchSearchResultsRequest() {
  return {
    type: actions.FETCH_SEARCH_RESULTS_REQUEST
  }
}

export function fetchSearchResultsSuccess(searchResults) {
  return {
    type: actions.FETCH_SEARCH_RESULTS_SUCCESS,
    payload: searchResults
  }
}

export function fetchSearchResultsFailure(ex) {
  return {
    type: actions.FETCH_SEARCH_RESULTS_FAILURE,
    ex
  }
}

export function fetchSearchResults(query) {
  return dispatch => {
    dispatch(fetchSearchResultsRequest());
    return fetch(`${API_SEARCH}&query=${query}`)
    .then(fetchStatusHandler)
    .then(response => response.json())
    .then(json => dispatch(fetchSearchResultsSuccess(json.results)))
    .catch(ex => dispatch(fetchSearchResultsFailure(ex)));
  }
}
