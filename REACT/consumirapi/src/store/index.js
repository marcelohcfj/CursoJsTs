import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddlesware = createSagaMiddleware();

const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddlesware),
);

sagaMiddlesware.run(rootSaga);

export default store;
export const persistor = persistStore(store);
