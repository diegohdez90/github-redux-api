import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import FormSaga from './components/Form/saga';
import GetTokenSaga from './components/GetToken/saga';
import reducer from './reducers';

const sagaMiddlewareGetRepos = createSagaMiddleware();  //Create middleware for saga
const sagaMiddlewareGetToken = createSagaMiddleware();


const store = createStore(
  reducer,
  applyMiddleware(sagaMiddlewareGetRepos),
  applyMiddleware(sagaMiddlewareGetToken),
  applyMiddleware(thunk)
); //mount it into redux store

sagaMiddlewareGetRepos.run(FormSaga);
sagaMiddlewareGetToken.run(GetTokenSaga);

export default store;