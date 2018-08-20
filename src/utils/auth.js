import * as userDetails from './users.js';

const userLocalStorageKey = 'LOGGEDIN_USERID';
const { USERS, userTokens } = userDetails;

export const getLoggedInUser = () => {
  const userToken = localStorage.getItem(userLocalStorageKey);
  const userId = userTokens[userToken];
  let loggedIn = false;
  let user;

  if (userId) {
    user = getUser(userId);
  }

  if (userId && user) {
    loggedIn = true;
  }

  return {
    loggedIn,
    user
  };
};

export const getUser = userId => USERS[userId];

export const validateAuth = (username, password) => {
  const user = USERS[username];

  let response = {
    success: false,
    errorMessage: 'Login error'
  };

  if (user && user.password === password) {
    response = {
      success: true,
      user
    };
  }
  return response;
};

export const clearLocalStorage = () => {
  localStorage.removeItem(userLocalStorageKey);
};

export const setLocalStorage = value => {
  localStorage.setItem(userLocalStorageKey, value);
};
