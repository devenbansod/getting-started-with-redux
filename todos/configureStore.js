import { createStore } from 'redux';
import reducer from './reducers/root';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
