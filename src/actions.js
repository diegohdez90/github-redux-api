import { USERNAME,
  PASSWORD,
  FETCH_GET_TOKEN,
  FETCH_GET_TOKEN_SUCCESS,
  FETCH_USER_REPOS_SUCCESS,
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  GITHUB_ACCOUNT,
  FETCH_USER_REPOS,
  WATCH_REPO,
  WATCH_REPO_SUCCESS,
  WATCH_REPO_FAILURE,
  STAR_REPO,
  STAR_REPO_SUCCESS,
  STAR_REPO_FAILURE,
  CLEAR_MESSAGE,
  FETCH_GET_TOKEN_FAILURE,
  FETCH_STARRED_REPO,
  FETCH_STARRED_REPO_SUCCESS,
  FETCH_STARRED_REPO_FAILURE,
  FORK_REPO,
  FORK_REPO_SUCCESS,
  FORK_REPO_FAILURE,
  FETCH_REPO_ISSUES,
  FETCH_REPO_ISSUES_SUCCESS,
  FETCH_REPO_ISSUES_FAILURE,
  FETCH_USER_REPOS_FAILURE,
  OPEN_PROJECT_DETAILS,
  FETCH_UPDATE_REPO_SUCCESS,
  FETCH_UPDATE_REPO_FAILURE,
  FETCH_UPDATE_REPO,
  SET_PAGE,
  FETCH_REPO_PULL,
  FETCH_REPO_PULL_SUCCESS,
  FETCH_REPO_PULL_FAILURE,
  FETCH_REPO_BRANCHES,
  FETCH_REPO_BRANCHES_SUCCESS,
  FETCH_REPO_BRANCHES_FAILURE} from './utils/constants';

export function clearMessage () {
  return {
    type: CLEAR_MESSAGE,
  };
}

export function updateUsernameToken(username) {
  return {
    type: USERNAME,
    username,
  };
}

export function updatePasswordToken(password) {
  return {
    type: PASSWORD,
    password,
  };
}

export function fetchGetToken(username, password) {
  return {
    type: FETCH_GET_TOKEN,
    username,
    password,
  };
}

export function getToken(token) {
  return {
    type: FETCH_GET_TOKEN_SUCCESS,
    token,
  };
}

export function fetchGetTokenFailure(message) {
  return {
    type: FETCH_GET_TOKEN_FAILURE,
    message,
  };
}

export function updateGithubAccount (githubAccount) {
  return {
    type: GITHUB_ACCOUNT,
    githubAccount,
  };
}

export function fetchAccount (githubAccount, token) {
  return {
    type: FETCH_ACCOUNT,
    githubAccount,
    token,
  };
}

export function fetchAccountSuccess (account) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    account,
  };
}

export function openRepoDetails (repo, toggle) {
  return {
    type: OPEN_PROJECT_DETAILS,
    repo,
    toggle,
  };
}

export function fetchUserRepos (githubAccount, token, page) {
  return {
    type: FETCH_USER_REPOS,
    githubAccount,
    token,
    page,
  };
}

export function addRepos(repos) {
  return {
    type: FETCH_USER_REPOS_SUCCESS,
    repos,
  };
}

export function getReposFailure(message) {
  return {
    type: FETCH_USER_REPOS_FAILURE,
    message,
  };
}

export function fetchStarredRepo() {
  return {
    type: FETCH_STARRED_REPO,
  };
}

export function setPage(number){
  return {
    type: SET_PAGE,
    number,
  };
}

export function fetchStarredRepoSuccess(message) {
  return {
    type: FETCH_STARRED_REPO_SUCCESS,
    message,
  };
}

export function fetchStarredRepoFailure(message) {
  return {
    type: FETCH_STARRED_REPO_FAILURE,
    message,
  };
}

export function fetchUpdateRepo(repo, owner, token) {
  return {
    type: FETCH_UPDATE_REPO,
    repo,
    owner,
    token,
  };
}

export function updateRepoSuccess(repo) {
  return {
    type: FETCH_UPDATE_REPO_SUCCESS,
    repo,
  };
}

export function updateRepoFailure(message){
  return {
    type: FETCH_UPDATE_REPO_FAILURE,
    message,
  };
}

export function watchRepo (repoToWatch, account, token) {
  return {
    type: WATCH_REPO,
    repoToWatch,
    account,
    token,
  };
}

export function watchRepoSuccess (message) {
  return {
    type: WATCH_REPO_SUCCESS,
    message,
  };
}

export function watchRepoFailure (message) {
  return {
    type: WATCH_REPO_FAILURE,
    message,
  };
}


export function starRepo (repoToStar, account, token) {
  return {
    type: STAR_REPO,
    repoToStar,
    account,
    token,
  };
}

export function starRepoSuccess (message) {
  return {
    type: STAR_REPO_SUCCESS,
    message,
  };
}

export function starRepoFailure (message) {
  return {
    type: STAR_REPO_FAILURE,
    message,
  };
}

export function forkRepo () {
  return {
    type: FORK_REPO,
  };
}

export function forkRepoSuccess (message) {
  return {
    type: FORK_REPO_SUCCESS,
    message,
  };
}

export function forkRepoFailure (message) {
  return {
    type: FORK_REPO_FAILURE,
    message,
  };
}

export function fetchRepoIssues () {
  return {
    type: FETCH_REPO_ISSUES,
  };
}

export function fetchRepoIssuesSuccess (issues) {
  return {
    type: FETCH_REPO_ISSUES_SUCCESS,
    issues,
  };
}

export function fetchRepoIssuesFailure (message) {
  return {
    type: FETCH_REPO_ISSUES_FAILURE,
    message,
  };
}

export function fetchRepoPull () {
  return {
    type: FETCH_REPO_PULL,
  };
}

export function fetchRepoPullSuccess (pulls) {
  return {
    type: FETCH_REPO_PULL_SUCCESS,
    pulls,
  };
}

export function fetchRepoPullFailure (message) {
  return {
    type: FETCH_REPO_PULL_FAILURE,
    message,
  };
}

export function fetchRepoBranches () {
  return {
    type: FETCH_REPO_BRANCHES,
  };
}

export function fetchRepoBRanchesSuccess (branches) {
  return {
    type: FETCH_REPO_BRANCHES_SUCCESS,
    branches,
  };
}

export function fetchRepoBranchesFailure (message) {
  return {
    type: FETCH_REPO_BRANCHES_FAILURE,
    message,
  };
}
