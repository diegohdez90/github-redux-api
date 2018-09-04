import { Buffer } from 'buffer';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { FETCH_GET_TOKEN, FETCH_GET_TOKEN_SUCCESS, FETCH_GET_TOKEN_FAILURE, FETCH_ACCOUNT, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILURE, FETCH_USER_REPOS, FETCH_USER_REPOS_SUCCESS, FETCH_USER_REPOS_FAILURE, FETCH_UPDATE_REPO_FAILURE, FETCH_UPDATE_REPO_SUCCESS, FETCH_UPDATE_REPO } from '../../utils/constants';

function* getUserToken(action) {
  const {username, password} = action;
  try {
    const buffer = new Buffer(`${username}:${password}`);
    const encodeAuth = buffer.toString('base64');
    const auth = yield call(request, 'https://api.github.com/user', {
      headers: {
        Authorization: `Basic ${encodeAuth}`,
      },
    });
    if ('name' in auth) yield put({ type: FETCH_GET_TOKEN_SUCCESS, token: encodeAuth });
    else yield put({ type: FETCH_GET_TOKEN_FAILURE, message: auth });
  } catch(error) {
    yield put({ type: FETCH_GET_TOKEN_FAILURE, message: error.message });
  }
}

function* fetchAccount(action) {
  try {
    const { token } = action;
    let headers = {};
    if (token) {
      headers = {
        Authorization: `Basic ${token}`,
      };
    }
    const account = yield call(request, `https://api.github.com/users/${action.githubAccount}`, {
      method: 'GET',
      headers,
    });
    if ('name' in account) yield put({ type: FETCH_ACCOUNT_SUCCESS, account });
    else yield put({ type: FETCH_ACCOUNT_FAILURE, message: account });
  } catch (error) {
    yield put({ type: FETCH_ACCOUNT_FAILURE, message: error.message });
  }
}

function* fetchUserRepos(action) {
  try {
    const { token } = action;
    let headers = {};
    if (token) {
      headers = {
        Authorization: `Basic ${token}`,
      };
    }
    const repos = yield call(request, `https://api.github.com/users/${action.githubAccount}/repos`, {
      method: 'GET',
      headers,
    });
    if (Array.isArray(repos)) yield put({ type: FETCH_USER_REPOS_SUCCESS, repos });
    else yield put({ type: FETCH_USER_REPOS_FAILURE, message: repos });
  } catch (error) {
    yield put({ type: FETCH_USER_REPOS_FAILURE, message: error.message });
  }
}

function* fetchUpdateRepo(action) {
  try {
    const {repo, owner, token} = action;
    let headers = {};
    if (token) {
      headers = {
        Authorization: `Basic ${token}`,
      };
    }
    const response = yield call(request, `https://api.github.com/repos/${owner}/${repo}`, {
      method: 'GET',
      headers,
    });
    delete response['organization'];
    delete response['network_count'];
    delete response['subscribers_count'];
    yield put({ type: FETCH_UPDATE_REPO_SUCCESS, repo: response});
  } catch (error) {
    yield put({ type: FETCH_UPDATE_REPO_FAILURE, message: error.message});
  }
}

function* saga() {
  yield takeLatest(FETCH_GET_TOKEN, getUserToken);
  yield takeLatest(FETCH_ACCOUNT, fetchAccount);
  yield takeLatest(FETCH_USER_REPOS, fetchUserRepos);
  yield takeLatest(FETCH_UPDATE_REPO, fetchUpdateRepo);
}

export default saga;
