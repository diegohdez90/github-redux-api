import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import FormSaga from './components/Form/saga';
import GetTokenSaga from './components/GetToken/saga';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();  //Create middleware for saga
const sagaMiddlewareGetToken = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
  applyMiddleware(sagaMiddlewareGetToken)
); //mount it into redux store


sagaMiddleware.run(FormSaga);
sagaMiddlewareGetToken.run(GetTokenSaga);
 
export default store;