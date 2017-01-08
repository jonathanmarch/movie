import * as actions from '../constants/actions';

const initialState = {
  isFetching: false,
  movies: []
};

const discover = (state=initialState, action) => {
  switch (action.type) {

    case actions.FETCH_POPULAR_MOVIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actions.FETCH_POPULAR_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        movies: action.payload
      });

      case actions.FETCH_POPULAR_MOVIES_FAILURE:
        return Object.assign({}, state, {
          isFetching: false
        });

      case actions.FETCH_CINEMA_MOVIES_REQUEST:
        return Object.assign({}, state, {
          isFetching: true
        });

      case actions.FETCH_CINEMA_MOVIES_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          movies: action.payload
        });

        case actions.FETCH_CINEMA_MOVIES_FAILURE:
          return Object.assign({}, state, {
            isFetching: false
        });

    default:
      return state;
  }
};

export default discover;
