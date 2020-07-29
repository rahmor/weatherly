import { createStore } from 'redux';
import addCityReducer from './reducers/reducers';

const store = createStore(addCityReducer);

export default store;
