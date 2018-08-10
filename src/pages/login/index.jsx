import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from '../../reducers/user';
import Login from './login.jsx';

const mapStateToProps = state => ({
  isLoggedIn: selectors.isLoggedIn(state)
});

const mapDistpachToProps = dispatch => ({
  userActions: bindActionCreators(actions, dispatch)
});

const LoginContainer = connect(
  mapStateToProps,
  mapDistpachToProps
)(Login);

export default LoginContainer;
