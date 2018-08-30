import React from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';
import Toast from 'components/toast/index.jsx';
import './styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
    const {
      history,
      userActions: { loginFetch }
    } = this.props;
    const { username, password } = this.state;

    event.preventDefault();
    loginFetch({ username, password });
    history.push('../login');
  };

  handleUsernameChange = ({ target: { value: username } }) => {
    this.setState({
      username
    });
  };

  handlePasswordChange = ({ target: { value: password } }) => {
    this.setState({
      password
    });
  };

  onCancel = () => {
    this.props.history.push('../home');
  };

  render() {
    const { username, password } = this.state;

    const {
      history,
      data: {
        login: { loading: loginLoading, error: loginError },
        loggedIn
      }
    } = this.props;

    const disableLogin = loginLoading
      ? true
      : username && password
        ? false
        : true;

    if (loggedIn) {
      history.push('../');
    }

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <div className="login-title">Login</div>
          <div className="input-box-wrapper">
            <div className="input-label">Username</div>
            <div className="input-wrapper username">
              <input
                className="input"
                type="text"
                value={username}
                onChange={this.handleUsernameChange}
              />
            </div>
          </div>
          <div className="input-box-wrapper">
            <div className="input-label">Password</div>
            <div className="input-wrapper password">
              <input
                className="input"
                type="password"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </div>
          </div>
          <div className="actions-container">
            <button
              className={cx('submit-button', {
                'button-disabled': disableLogin,
                'button-loading': loginLoading
              })}
              type="submit"
              disabled={disableLogin}
            >
              Submit
            </button>
            <button
              className={cx('cancel-button', {
                'button-disabled': loginLoading
              })}
              type="button"
              onClick={this.onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
        {loginError && <Toast type="error">{loginError}</Toast>}
      </div>
    );
  }
}

export default withRouter(Login);
