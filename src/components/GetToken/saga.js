import { Buffer } from 'buffer'
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_GET_TOKEN, FETCH_GET_TOKEN_SUCCESS, FETCH_GET_TOKEN_FAILURE } from '../../utils/constants';
import request from '../../utils/request';

function* getUserToken(action){
  console.log(action);
  
  const {username, password} = action;
  try {
    const buffer = new Buffer(`${username}:${password}`)
    const encodeAuth = buffer.toString('base64')
    const token = yield call(request, 'https://api.github.com/user', {
      headers: {
        Authorization: `Basic ${encodeAuth}`
      }
    })
  
    yield put({type: FETCH_GET_TOKEN_SUCCESS, token: encodeAuth})
  } catch(error) {
    yield put({ type: FETCH_GET_TOKEN_FAILURE, message: error.message })
  }
}

function* saga() {
  yield takeLatest(FETCH_GET_TOKEN, getUserToken);
}

export default saga;