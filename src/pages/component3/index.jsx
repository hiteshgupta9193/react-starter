import React from 'react';
import { Link } from 'react-router-dom';

class Component3 extends React.Component {
  render() {
    console.log('C3 - ', this.props);
    return (
      <div>
        <div>I am Component3</div>
        <Link to="/component2">Prev</Link>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Component3;
