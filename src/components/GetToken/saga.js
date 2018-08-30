import { Buffer } from 'buffer'
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_GET_TOKEN, FETCH_GET_TOKEN_SUCCESS, FETCH_GET_TOKEN_FAILURE, FETCH_STARRED_REPOS_FAILURE, FETCH_STARRED_REPOS_SUCCESS } from '../../utils/constants';
import request from '../../utils/request';

function* getUserToken(action){  
  const {username, password} = action;
  try {
    const buffer = new Buffer(`${username}:${password}`)
    const encodeAuth = buffer.toString('base64')
    const auth = yield call(request, 'https://api.github.com/user', {
      headers: {
        Authorization: `Basic ${encodeAuth}`
      }
    })
    if ('name' in auth) yield put({ type: FETCH_GET_TOKEN_SUCCESS, token: encodeAuth });
    else yield put({ type: FETCH_GET_TOKEN_FAILURE, message: auth });
  } catch(error) {
    yield put({ type: FETCH_GET_TOKEN_FAILURE, message: error.message });
  }

  try {
    // /user/starred
    const buffer = new Buffer(`${username}:${password}`)
    const encodeAuth = buffer.toString('base64')
    const starred = yield call(request, 'https://api.github.com/user/starred', {
      headers: {
        Authorization: `Basic ${encodeAuth}`
      }
    });
    console.log(starred);
    if (Array.isArray(starred)) yield put({ type: FETCH_STARRED_REPOS_SUCCESS, starredRepos: starred});
    else yield put({ type: FETCH_STARRED_REPOS_FAILURE, message: starred.message});
  } catch (error) {
    yield put({type: FETCH_STARRED_REPOS_FAILURE, message: error.message});
  } 
}

function* saga() {
  yield takeLatest(FETCH_GET_TOKEN, getUserToken);
}

export default saga;