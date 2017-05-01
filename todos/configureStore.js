import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import promise from 'redux-promise';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
