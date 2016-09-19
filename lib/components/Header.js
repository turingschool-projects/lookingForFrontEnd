import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="nav">
        <Navbar className="navbar-fixed-top">
          <Navbar.Header id="brand">
            <Navbar.Brand>
              <Link to="/">Looking For</Link>
              <Link to="/trends">Trends</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Header;
