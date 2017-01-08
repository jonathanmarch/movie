import { combineReducers } from 'redux';
import discover from './discover';
import search from './search';

export default combineReducers({
  discover,
  search
});
