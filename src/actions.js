import { USERNAME, 
  PASSWORD, 
  FETCH_GET_TOKEN, 
  FETCH_GET_TOKEN_SUCCESS, 
  FETCH_USER_REPOS_SUCCESS, 
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  GITHUB_ACCOUNT, 
  FETCH_USER_REPOS } from "./utils/constants";

export function updateUsernameToken(username) {
  return {
    type: USERNAME,
    username
  };
}

export function updatePasswordToken(password) {
  return {
    type: PASSWORD,
    password
  };
}

export function fetchGetToken(username, password) {
  console.log(username, password);
  
  return {
    type: FETCH_GET_TOKEN,
    username,
    password
  }
}

export function getToken(token) {
  return {
    type: FETCH_GET_TOKEN_SUCCESS,
    token
  };
}

export function updateGithubAccount (githubAccount) {
  return {
    type: GITHUB_ACCOUNT,
    githubAccount
  }
}

export function fetchAccount (githubAccount, token) {
  return {
    type: FETCH_ACCOUNT,
    githubAccount,
    token
  };
}

export function fetchAccountSuccess (account) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    account
  };
}

export function fetchUserRepos (githubAccount, token) {
  return {
    type: FETCH_USER_REPOS,
    githubAccount, 
    token
  }
};

export function addRepos(repos) {
  return {
    type: FETCH_USER_REPOS_SUCCESS,
    repos
  }
};

export function getReposFailure(message) {
  return {
    type: FETCH_USER_REPOS_FAILURE,
    message
  };
}