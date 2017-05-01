import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const middlewares = [thunk];

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
