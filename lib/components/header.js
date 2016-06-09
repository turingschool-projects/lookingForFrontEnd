import React from 'react';
import SearchBar from './SearchBar';
import { Navbar } from 'react-bootstrap';

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
              <a href="#">Looking For</a>
            </Navbar.Brand>
            <SearchBar />
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Header;
