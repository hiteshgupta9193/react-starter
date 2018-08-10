const INITIAL_STATE = {
  loggedIn: false,
  user: {}
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: payload
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {}
      };
    default:
      return state;
  }
};

const login = payload => ({ type: LOGIN, payload });
const logout = () => ({ type: LOGOUT });

const actions = {
  login,
  logout
};

const isLoggedIn = state => state.userReducer.loggedIn;

const selectors = {
  isLoggedIn
};

export { actions, selectors };
