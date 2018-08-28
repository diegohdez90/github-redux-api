import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import FormSaga from './components/Form/saga';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();  //Create middleware for saga

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)); //mount it into redux store


sagaMiddleware.run(FormSaga); 

export default store;