import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import MainSaga from './containers/Main/saga';
import reducer from './reducers';

const sagaMiddlewareMain = createSagaMiddleware(); // Create middleware for saga

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddlewareMain),
  applyMiddleware(thunk)
); //mount it into redux store

sagaMiddlewareMain.run(MainSaga);

export default store;
