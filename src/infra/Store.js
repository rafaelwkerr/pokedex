import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appReducer from './Reducer'

const store = createStore(appReducer, composeWithDevTools());

export default store;