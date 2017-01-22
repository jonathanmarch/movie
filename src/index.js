import 'babel-polyfill';
import 'isomorphic-fetch';
import promise from 'es6-promise';

promise.polyfill();

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './app/components/app';
import Discover from './app/components/discover/discover';
import Movie from './app/components/movie/movie';

import reducers from './app/reducers';

import './scss/index.scss';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middleware.push(logger);
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Discover} />
        <Route path="/movie/:id" component={Movie} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
