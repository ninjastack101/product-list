import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { sagaMiddleware } from '../sagas';
import appReducer from '../reducers';

export const reducers = combineReducers({
  app: appReducer,
});

const logger = createLogger({ diff: true });

const configureStore = () => {
  const middlewares = [sagaMiddleware, logger];

  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(...middlewares)),
  );
  return store;
};

export default configureStore;
