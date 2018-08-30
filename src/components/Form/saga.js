import { call, put, takeLatest }  from 'redux-saga/effects';
import { FETCH_USER_REPOS,
  FETCH_USER_REPOS_SUCCESS,
  FETCH_USER_REPOS_FAILURE,
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE
 } from '../../utils/constants';
import request from '../../utils/request';

function* fetchAccount(action) {
  
  try {
    const {token} = action;
    let headers = {};
    if (token) {
      headers = {
        Authorization: `Basic ${token}`
      }
    }
    const account = yield call(request, `https://api.github.com/users/${action.githubAccount}`, {
      method: 'GET',
      headers
    });
    if ('name' in account) yield put({ type: FETCH_ACCOUNT_SUCCESS, account });
    else yield put({ type: FETCH_ACCOUNT_FAILURE, message: account });
  } catch (error) {
    yield put({type: FETCH_ACCOUNT_FAILURE, message: error.message })
  }
}

function* fetchUserRepos (action) {
  try {
    const { token } = action;
    let headers = {};
    if (token) {
      headers = {
        Authorization: `Basic ${token}`
      }
    }
    const repos = yield call(request, `https://api.github.com/users/${action.githubAccount}/repos`, {
      method: 'GET',
      headers
    });
    if (Array.isArray(repos)) yield put({ type: FETCH_USER_REPOS_SUCCESS, repos });
    else yield put({ type: FETCH_USER_REPOS_FAILURE, message: repos })
  } catch (error) {
    yield put({ type: FETCH_USER_REPOS_FAILURE, message: error.message})
  }
}

function* saga() {
  yield takeLatest(FETCH_ACCOUNT, fetchAccount);
  yield takeLatest(FETCH_USER_REPOS, fetchUserRepos);
}

export default saga;