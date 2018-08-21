import { getLoggedInUser } from 'utils/auth.js';
import { actionCreator, apiTypeCreator } from 'utils/reducer';
const INITIAL_STATE = {
  loggedIn: false,
  user: {},
  login: {
    loading: false,
    error: null
  },
  logout: {
    loading: false,
    error: null
  },
  ...getLoggedInUser()
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const types = { ...apiTypeCreator(LOGIN), ...apiTypeCreator(LOGOUT) };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types[LOGIN].FETCH:
      return {
        ...state,
        loggedIn: false,
        user: {},
        login: {
          loading: true,
          error: null
        }
      };
    case types[LOGIN].SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: payload,
        login: {
          loading: false,
          error: null
        }
      };
    case types[LOGIN].ERROR:
      return {
        ...state,
        loggedIn: false,
        user: {},
        login: {
          loading: false,
          error: payload
        }
      };
    case types[LOGIN].RESET:
      return {
        ...state,
        loggedIn: false,
        user: {},
        login: {
          loading: false,
          error: null
        }
      };
    case types[LOGOUT].FETCH:
      return {
        ...state,
        logout: {
          loading: true,
          error: null
        }
      };
    case types[LOGOUT].SUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: {},
        logout: {
          loading: false,
          error: null
        }
      };
    case types[LOGOUT].ERROR:
      return {
        ...state,
        logout: {
          loading: false,
          error: payload
        }
      };
    case types[LOGOUT].RESET:
      return {
        ...state,
        logout: {
          loading: false,
          error: null
        }
      };
    default:
      return state;
  }
};

const loginFetch = actionCreator(types[LOGIN].FETCH);
const loginSuccess = actionCreator(types[LOGIN].SUCCESS);
const loginError = actionCreator(types[LOGIN].ERROR);
const loginReset = actionCreator(types[LOGIN].RESET);

const logoutFetch = actionCreator(types[LOGOUT].FETCH);
const logoutSuccess = actionCreator(types[LOGOUT].SUCCESS);
const logoutError = actionCreator(types[LOGOUT].ERROR);
const logoutReset = actionCreator(types[LOGOUT].RESET);

const actions = {
  loginFetch,
  loginSuccess,
  loginError,
  loginReset,
  logoutFetch,
  logoutSuccess,
  logoutError,
  logoutReset
};

const getState = state => state.userReducer;

const selectors = {
  getState
};

export { actions, selectors, types };
