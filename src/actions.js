import { USERNAME, PASSWORD, GET_TOKEN, FETCH_USER_REPOS_SUCCESS, GITHUB_ACCOUNT, FETCH_USER_REPOS } from "./utils/constants";

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

export function getToken(token) {
  return {
    type: GET_TOKEN,
    token
  };
}

export function updateGithubAccount (githubAccount) {
  return {
    type: GITHUB_ACCOUNT,
    githubAccount
  }
}

export function fetchUserRepos (githubAccount) {
  return {
    type: FETCH_USER_REPOS,
    githubAccount
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