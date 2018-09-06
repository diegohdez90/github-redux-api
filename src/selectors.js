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
  OPEN_PROJECT_DETAILS,
  FETCH_UPDATE_REPO_SUCCESS,
  SET_PAGE,
  FETCH_REPO_ISSUES_SUCCESS,
  FETCH_REPO_PULL_SUCCESS,
  FETCH_REPO_PULL_FAILURE,
  FETCH_REPO_BRANCHES_FAILURE,
  FETCH_REPO_BRANCHES_SUCCESS,
  FETCH_REPO_COMMITS_FAILURE,
  FETCH_REPO_COMMITS_SUCCESS,
} from './utils/constants';

function app(state = {
  detailsOpen: false,
  issues: [],
  pulls: [],
  branches: [],
  commits: [],
  page: 1,
  pageSize: 30,
}, action) {
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
    case FETCH_REPO_PULL_FAILURE:
    case FETCH_REPO_BRANCHES_FAILURE:
    case FETCH_REPO_COMMITS_FAILURE:
      return {...state, message: action.message};
    case GITHUB_ACCOUNT:
      return { ...state, githubAccount: action.githubAccount};
    case FETCH_USER_REPOS_SUCCESS:
      return {...state, repos: action.repos };
    case SET_PAGE:
      return {...state, page: action.number};
    case OPEN_PROJECT_DETAILS:
      return {...state, detailsOpen: action.toggle, repoOpen: action.toggle ? action.repo : '', issues: []};
    case FETCH_UPDATE_REPO_SUCCESS:
      return {...state, repos: state.repos.map(repo => repo.id === action.repo.id ? action.repo : repo)};
    case FETCH_REPO_ISSUES_SUCCESS:
      return {...state, issues: action.issues};
    case FETCH_REPO_PULL_SUCCESS:
      return {...state, pulls: action.pulls};
    case FETCH_REPO_BRANCHES_SUCCESS:
      return {...state, branches: action.branches};
    case FETCH_REPO_COMMITS_SUCCESS:
      return {...state, commits: action.commits};
    case CLEAR_MESSAGE:
      return{...state, message: ''};
    default:
      return state;
  }
}

export default app;
