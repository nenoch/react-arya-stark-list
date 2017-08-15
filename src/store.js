import { combineReducers, createStore } from 'redux';
import aryaStarkListApp from './reducers/';

const reducers = combineReducers({
  aryaStarkListApp,
});

export default createStore(reducers);
