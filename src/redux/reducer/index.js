// used to combine reducers
import { combineReducers } from 'redux';
import reducerOne from './reducerOne';

const reducers = combineReducers({
  // this takes a key value pair
  reducer1: reducerOne,
  // so on if there are more reducers
});

export default reducers;