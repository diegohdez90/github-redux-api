import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import FormSaga from './components/Form/saga';
import GetTokenSaga from './components/GetToken/saga';
import WatchRepoSaga from './components/Watches/saga';
import reducer from './reducers';

const sagaMiddlewareGetRepos = createSagaMiddleware();  //Create middleware for saga
const sagaMiddlewareGetToken = createSagaMiddleware();
const sagaMiddlewareWatchRepo = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddlewareGetRepos),
  applyMiddleware(sagaMiddlewareGetToken),
  applyMiddleware(sagaMiddlewareWatchRepo)
); //mount it into redux store


sagaMiddlewareGetRepos.run(FormSaga);
sagaMiddlewareGetToken.run(GetTokenSaga);
sagaMiddlewareWatchRepo.run(WatchRepoSaga);

export default store;