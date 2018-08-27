import { fromJS } from 'immutable';
import { USERNAME, PASSOWORD, TOKEN } from './constants';

const initialState = fromJS({
  username: '',
  password: '',
  token: '',
  repos: []
});

function reducer (state = initialState, action) {
  switch (action.type) {
    case USERNAME:
      const {username} = action;
      state.set('username', username);
      break;
    case PASSOWORD:
      const {password} = action;
      state.set('password', password)
      break;
    case TOKEN:
      const {token} = action;
      state.set('token', token);
      break;
    default:
      return state;
  }
}

export default reducer;