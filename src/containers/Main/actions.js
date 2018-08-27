import { USERNAME, PASSOWORD, GET_TOKEN } from './constants';

export function updateUsernameToken (username) {
  return {
    type: USERNAME,
    username
  };
}

export function updatePasswordToken (password) {
  return {
    type: PASSOWORD,
    password
  };
}

export function getToken (token) {
  return {
    type: GET_TOKEN,
    token
  };
}
