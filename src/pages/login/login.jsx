import React from 'react';
import { withRouter } from 'react-router-dom';

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
      userActions: { login }
    } = this.props;
    const { username } = this.state;

    event.preventDefault();
    login({ username });
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

  render() {
    const { username, password } = this.state;
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn) {
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
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
