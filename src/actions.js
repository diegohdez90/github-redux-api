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
  FETCH_STARRED_REPOS,
  FETCH_STARRED_REPOS_SUCCESS,
  FETCH_STARRED_REPOS_FAILURE} from "./utils/constants";

export function clearMessage () {
  return {
    type: CLEAR_MESSAGE
  }
}

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

export function fetchGetTokenFailure(message) {
  return {
    type: FETCH_GET_TOKEN_FAILURE,
    message
  }
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

export function fetchStarredRepos () {
  return {
    type: FETCH_STARRED_REPOS
  };
};

export function fetchStarredReposSuccess (starredRepos) {
  return {
    type: FETCH_STARRED_REPOS_SUCCESS,
    starredRepos
  };
};

export function fetchStarredReposFailure (message) {
  return {
    type: FETCH_STARRED_REPOS_FAILURE,
    message
  };
};

export function fetchUserRepos (githubAccount, token) {
  return {
    type: FETCH_USER_REPOS,
    githubAccount, 
    token
  };
};

export function addRepos(repos) {
  return {
    type: FETCH_USER_REPOS_SUCCESS,
    repos
  };
};

export function getReposFailure(message) {
  return {
    type: FETCH_USER_REPOS_FAILURE,
    message
  };
};

export function watchRepo (repoToWatch, account, token) {
  return {
    type: WATCH_REPO,
    repoToWatch,
    account,
    token
  };
};

export function watchRepoSuccess (message) {
  return {
    type: WATCH_REPO_SUCCESS,
    message
  };
};

export function watchRepoFailure (message) {
  return {
    type: WATCH_REPO_FAILURE,
    message
  };
};


export function starRepo (repoToStar, account, token) {
  return {
    type: STAR_REPO,
    repoToStar,
    account,
    token
  };
};

export function starRepoSuccess (message) {
  return {
    type: STAR_REPO_SUCCESS,
    message
  };
};

export function starRepoFailure (message) {
  return {
    type: STAR_REPO_FAILURE,
    message
  };
};