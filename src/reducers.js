import { combineReducers }  from 'redux'
import { USERNAME, 
  PASSOWORD, 
  FETCH_GET_TOKEN_SUCCESS, 
  FETCH_USER_REPOS_SUCCESS,
  FETCH_ACCOUNT_SUCCESS,
  GITHUB_ACCOUNT, 
  WATCH_REPO_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  WATCH_REPO_FAILURE,
  FETCH_USER_REPOS_FAILURE,
  STAR_REPO_SUCCESS,
  STAR_REPO_FAILURE,
  CLEAR_MESSAGE,
  FETCH_GET_TOKEN_FAILURE,
  FETCH_STARRED_REPO_SUCCESS,
  FETCH_STARRED_REPO_FAILURE, 
  FORK_REPO_SUCCESS,
  FORK_REPO_FAILURE,
  FETCH_REPO_ISSUES_FAILURE,
  FETCH_REPO_ISSUES_SUCCESS,
  SET_FALSE_ISSUES} from './utils/constants';

function reducer(state = [], action) {
  switch (action.type) {
    case USERNAME:
      const { username } = action;
      return {...state, username };
    case PASSOWORD:
      const { password } = action;
      return {...state, password };
    case FETCH_GET_TOKEN_SUCCESS:
      const { token } = action;
      return {...state, token , repos: [], githubAccount: '', account: null, message: 'Auth token successfully'};
    case FETCH_ACCOUNT_SUCCESS:
      const {account} = action;
      return {...state, account};
    case FETCH_GET_TOKEN_FAILURE:
    case FETCH_ACCOUNT_FAILURE:
    case FETCH_STARRED_REPO_SUCCESS:
    case FETCH_STARRED_REPO_FAILURE:
    case FETCH_USER_REPOS_FAILURE:
    case WATCH_REPO_SUCCESS:
    case WATCH_REPO_FAILURE:
    case STAR_REPO_SUCCESS:
    case STAR_REPO_FAILURE:
    case FORK_REPO_SUCCESS:
    case FORK_REPO_FAILURE:
    case FETCH_REPO_ISSUES_FAILURE:
      const {message} = action;
      return {...state, message};
    case GITHUB_ACCOUNT:
      const {githubAccount} = action;
      return {...state, githubAccount};
    case FETCH_USER_REPOS_SUCCESS:      
      const {repos} = action;
      return {...state, repos };
    case FETCH_REPO_ISSUES_SUCCESS:
      const {issues, repo: aRepo} = action;
      const index = state.repos.findIndex(repo => (repo.name) === aRepo);
      const {repos : reposAccount} = state;
      reposAccount[index].issues = issues;
      console.log(reposAccount);
      return {...state, repos: reposAccount, issues: true};
    case CLEAR_MESSAGE:
      return{...state, message: ''};
    default:
      return state;
  }
}

export default combineReducers({reducer});