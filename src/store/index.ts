import { createStore, combineReducers } from 'redux';
import appReducer from '../reducers';

export const reducers = combineReducers({
  app: appReducer,
});

const configureStore = () => {
  const store = createStore(reducers);
  return store;
};

export default configureStore;
