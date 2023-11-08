import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddlesware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddlesware));

sagaMiddlesware.run(rootSaga);

export default store;
