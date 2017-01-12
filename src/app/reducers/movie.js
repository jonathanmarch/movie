import * as actions from '../constants/actions';

const initialState = {
  isFetching: false,
  fetchedInformation: false,
  information: null
};

const search = (state=initialState, action) => {
  switch (action.type) {

    case actions.FETCH_MOVIE_INFORMATION_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actions.FETCH_MOVIE_INFORMATION_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    case actions.FETCH_MOVIE_INFORMATION_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        fetchedInformation: true,
        information: action.payload
      });

    default:
      return state;
  }
};

export default search;
