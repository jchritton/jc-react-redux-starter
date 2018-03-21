import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const configStore = ({ initialState, customMiddleware = [] } = {}) => {
  const checkDevTools =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

  const middleware = applyMiddleware([sagaMiddleware, ...customMiddleware]);

  const composeEnhancers = checkDevTools || compose;

  return createStore(rootReducer, initialState, composeEnhancers(middleware));
};

export default configStore;
