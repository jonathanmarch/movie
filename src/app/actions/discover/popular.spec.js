import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as popular from './popular';
import * as types from '../../constants/actions';

import {API_POPULAR_MOVIES} from '../../constants/api';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create fetch movies request action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(popular.fetchPopularMoviesRequest());

    const actions = store.getActions();
    const expectedAction = { type: 'FETCH_POPULAR_MOVIES_REQUEST' };

    expect(actions).toEqual([expectedAction]);
  });

  it('should create fetch movies failure action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const ex = new Error();

    store.dispatch(popular.fetchPopularMoviesFailure(ex));

    const actions = store.getActions();
    const expectedAction = { type: 'FETCH_POPULAR_MOVIES_FAILURE', ex };

    expect(actions).toEqual([expectedAction]);
  });

  it('should create fetch movies success action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const movies = [{
      name: 'test movie'
    }];

    store.dispatch(popular.fetchPopularMoviesSuccess(movies));

    const actions = store.getActions();
    const expectedAction = { type: 'FETCH_POPULAR_MOVIES_SUCCESS', payload: movies };

    expect(actions).toEqual([expectedAction]);
  });

  it('should execute fetch popular movies', (done) => {
    fetchMock.get(API_POPULAR_MOVIES, {results: [1,2,3]});

    const expectedActions = [
      {type: types.FETCH_POPULAR_MOVIES_REQUEST},
      {type: types.FETCH_POPULAR_MOVIES_SUCCESS, payload: [1,2,3]}
    ];

    const store = mockStore({});

    store.dispatch(popular.fetchPopularMovies())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should execute fetch popular movies and dispatch failure', (done) => {
    fetchMock.get(API_POPULAR_MOVIES, {status: 404, body: {}});

    const ex = new Error('Not Found');
    const expectedActions = [
      {type: types.FETCH_POPULAR_MOVIES_REQUEST},
      {type: types.FETCH_POPULAR_MOVIES_FAILURE, ex}
    ];

    const store = mockStore({});

    store.dispatch(popular.fetchPopularMovies())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

});
