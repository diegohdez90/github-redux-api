import { call, put, takeLatest }  from 'redux-saga/effects';
import { FETCH_USER_REPOS, FETCH_USER_REPOS_SUCCESS, FETCH_USER_REPOS_FAILURE } from '../../utils/constants';
import request from '../../utils/request';

function* fetchUserRepos (action) {
  console.log(action);
  
  try {
    const repos = yield call(request, `https://api.github.com/users/${action.githubAccount}/repos`, {
      method: 'GET'
    });
    console.log(repos);
    yield put({ type: FETCH_USER_REPOS_SUCCESS, repos});
  } catch (error) {
    yield put({ type: FETCH_USER_REPOS_FAILURE, message: error.message})
  }
}

function* saga() {
  yield takeLatest(FETCH_USER_REPOS, fetchUserRepos);
}

export default saga;