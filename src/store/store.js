import { createStore } from 'redux';
import driverReducer from '../reducers/driverReducer';

const store = createStore(driverReducer);

export default store;