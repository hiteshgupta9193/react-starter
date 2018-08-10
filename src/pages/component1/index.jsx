import React from 'react';
import { Link } from 'react-router-dom';

class Component1 extends React.Component {
  render() {
    console.log('C1 - ', this.props);
    return (
      <div>
        <div>I am Component1</div>
        <Link to="/">Home</Link>
        <Link to="/component2">Next</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Component1;
