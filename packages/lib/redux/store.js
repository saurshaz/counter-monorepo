import counterReducer from './reducers/counter';
import { createStore } from 'redux';
const store = createStore(counterReducer);

export {store};
