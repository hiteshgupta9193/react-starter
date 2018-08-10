import React from 'react';
import { Link } from 'react-router-dom';

class Component2 extends React.Component {
  render() {
    console.log('C2 - ', this.props);
    return (
      <div>
        <div>I am Component2</div>
        <Link to="/component1">Prev</Link>
        <Link to="/">Home</Link>
        <Link to="/component3">Next</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Component2;
