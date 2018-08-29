import {call, put, takeLatest} from 'redux-saga/effects';
import { WATCH_REPO, 
  WATCH_REPO_SUCCESS, 
  WATCH_REPO_FAILURE } from '../../utils/constants';
import request from '../../utils/request';

function* watchRepo(action) {
  const { repoToWatch,
    account,
    token} = action;
  try{
    const response = yield call(request, `https://api.github.com/repos/${account}/${repoToWatch}/subscription` , {
      method: 'PUT',
      Authorization: `Basic ${token}`
    });
    console.log(reponse);
    
    yield put({type: WATCH_REPO_SUCCESS, message: response})
  } catch (error) {
    yield put({type: WATCH_REPO_FAILURE, message: error.message})
  }
}


function* saga(){
  yield takeLatest(WATCH_REPO, watchRepo);
}

export default saga;