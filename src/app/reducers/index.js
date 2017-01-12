import { combineReducers } from 'redux';
import discover from './discover';
import search from './search';
import movie from './movie';

export default combineReducers({
  discover,
  search,
  movie
});
