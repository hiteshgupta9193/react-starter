import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from 'reducers/user';

import './styles.scss';

const loginPath = '/login';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      showLogout: false
    };
  }

  componentDidMount() {
    const {
      location: { pathname },
      isLoggedIn
    } = this.props;

    this.toggleLoginLogout(pathname, isLoggedIn);
  }

  toggleLoginLogout = (pathname, isLoggedIn) => {
    if (pathname === loginPath) {
      this.setState({
        showLogin: false,
        showLogout: false
      });
    } else {
      this.setState({
        showLogin: isLoggedIn ? false : true,
        showLogout: isLoggedIn ? true : false
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    const {
      location: { pathname },
      isLoggedIn
    } = this.props;
    const {
      location: { pathname: newPathname }
    } = nextProps;
    if (pathname !== newPathname) {
      this.toggleLoginLogout(newPathname, isLoggedIn);
    }
  }

  toggleLogin = () => {
    const {
      history: { push },
      isLoggedIn,
      userActions: { logoutFetch }
    } = this.props;

    if (isLoggedIn) {
      logoutFetch();
    }

    push('../login');
  };

  render() {
    const {
      location: { pathname },
      history: { push }
    } = this.props;

    const { showLogin, showLogout } = this.state;

    return (
      <div className="header">
        <div className="header-item" />
        <div className="header-item title">
          {pathname.split('/')[1].toUpperCase()}
        </div>
        {showLogin || showLogout ? (
          <div className="header-item login-btn" onClick={this.toggleLogin}>
            {showLogin ? 'Login' : 'Logout'}
          </div>
        ) : (
          <div className="header-item" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: selectors.isLoggedIn(state)
});

const mapDistpachToProps = dispatch => ({
  userActions: bindActionCreators(actions, dispatch)
});

const HeaderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDistpachToProps
  )(Header)
);

export default withRouter(HeaderContainer);
