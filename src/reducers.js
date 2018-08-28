import { combineReducers }  from 'redux'
import { USERNAME, PASSOWORD, TOKEN, FETCH_USER_REPOS_SUCCESS, GITHUB_ACCOUNT } from './utils/constants';

function reducer(state = [], action) {
  switch (action.type) {
    case USERNAME:
      const { username } = action;
      return {...state, username };
    case PASSOWORD:
      const { password } = action;
      return {...state, password };
    case TOKEN:
      const { token } = action;
      return {...state, token };
    case GITHUB_ACCOUNT:
      const {githubAccount} = action;
      return {...state, githubAccount};
    case FETCH_USER_REPOS_SUCCESS:
      const {repos} = action;      
      return {...state, repos };
    default:
      return state;
  }
}

export default combineReducers({reducer});