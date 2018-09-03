import { combineReducers } from 'redux';
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
} from './utils/constants';

function reducer(state = [], action) {
  switch (action.type) {
    case USERNAME:
      return {...state, username: action.username };
    case PASSOWORD:
      return {...state, password: action.password };
    case FETCH_GET_TOKEN_SUCCESS:
      return {...state, token: action.token , repos: [], githubAccount: '', account: null, message: 'Auth token successfully'};
    case FETCH_ACCOUNT_SUCCESS:
      return {...state, account: action.account};
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
      return {...state, message: action.message};
    case GITHUB_ACCOUNT:
      return { ...state, githubAccount: action.githubAccount};
    case FETCH_USER_REPOS_SUCCESS:
      return {...state, repos: action.repos };
    case CLEAR_MESSAGE:
      return{...state, message: ''};
    default:
      return state;
  }
}

export default combineReducers({reducer});
