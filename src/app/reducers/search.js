import * as actions from '../constants/actions';

const initialState = {
  isFetching: false,
  query: '',
  searchResults: []
};

const search = (state=initialState, action) => {
  switch (action.type) {

    case actions.UPDATE_SEARCH_QUERY:
      return Object.assign({}, state, {
        query: action.payload
      });

    case actions.FETCH_SEARCH_RESULTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actions.FETCH_SEARCH_RESULTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    case actions.FETCH_SEARCH_RESULTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        searchResults: action.payload
      });

    default:
      return state;
  }
};

export default search;
