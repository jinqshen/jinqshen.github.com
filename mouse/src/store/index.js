import { createStore } from 'redux';
import mouseApp from './reducers';

let store = createStore(mouseApp);

export default store;
