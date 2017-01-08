import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as search from './search';
import * as types from '../constants/actions';

import {API_SEARCH} from '../constants/api';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create update query action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const query = 'test';

    store.dispatch(search.updateSearchQuery(query));

    const actions = store.getActions();
    const expectedAction = { type: 'UPDATE_SEARCH_QUERY', payload: query };

    expect(actions).toEqual([expectedAction]);
  });

  it('should create search request action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(search.fetchSearchResultsRequest());

    const actions = store.getActions();
    const expectedAction = { type: 'FETCH_SEARCH_RESULTS_REQUEST' };

    expect(actions).toEqual([expectedAction]);
  });

  it('should create fetch movies failure action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const ex = new Error();

    store.dispatch(cinema.fetchCinemaMoviesFailure(ex));

    const actions = store.getActions();
    const expectedAction = { type: 'FETCH_CINEMA_MOVIES_FAILURE', ex };

    expect(actions).toEqual([expectedAction]);
  });

  it('should create fetch movies success action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const movies = [{
      name: 'test movie'
    }];

    store.dispatch(cinema.fetchCinemaMoviesSuccess(movies));

    const actions = store.getActions();
    const expectedAction = { type: 'FETCH_CINEMA_MOVIES_SUCCESS', payload: movies };

    expect(actions).toEqual([expectedAction]);
  });

  it('should execute fetch cinema movies', (done) => {
    fetchMock.get(API_CINEMA_MOVIES, {results: [1,2,3]});

    const expectedActions = [
      {type: types.FETCH_CINEMA_MOVIES_REQUEST},
      {type: types.FETCH_CINEMA_MOVIES_SUCCESS, payload: [1,2,3]}
    ];

    const store = mockStore({});

    store.dispatch(cinema.fetchCinemaMovies())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should execute fetch cinema movies and dispatch failure', (done) => {
    fetchMock.get(API_CINEMA_MOVIES, {status: 404, body: {}});

    const ex = new Error('Not Found');
    const expectedActions = [
      {type: types.FETCH_CINEMA_MOVIES_REQUEST},
      {type: types.FETCH_CINEMA_MOVIES_FAILURE, ex}
    ];

    const store = mockStore({});

    store.dispatch(cinema.fetchCinemaMovies())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

});
