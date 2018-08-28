import { combineReducers }  from 'redux'
import { USERNAME, 
  PASSOWORD, 
  FETCH_GET_TOKEN_SUCCESS, 
  FETCH_USER_REPOS_SUCCESS,
  FETCH_ACCOUNT_SUCCESS,
  GITHUB_ACCOUNT } from './utils/constants';

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
      console.log(token);
      
      return {...state, token };
    case FETCH_ACCOUNT_SUCCESS:
      const {account} = action;
      return {...state, account};
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