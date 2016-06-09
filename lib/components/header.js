import React from 'react';
import SearchBar from './SearchBar';
import { Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

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
            <NavDropdown eventKey={3} title="Browse by Technology" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Ruby</MenuItem>
            <MenuItem eventKey={3.2}>Rails</MenuItem>
            <MenuItem eventKey={3.3}>JavaScript</MenuItem>
            <MenuItem eventKey={3.4}>React</MenuItem>
            <MenuItem eventKey={3.5}>Go</MenuItem>
            <MenuItem eventKey={3.5}>Ember</MenuItem>
            <MenuItem eventKey={3.5}>Clojure</MenuItem>
            <MenuItem eventKey={3.5}>Angular</MenuItem>
            <MenuItem eventKey={3.5}>Python</MenuItem>
            <MenuItem eventKey={3.5}>PHP</MenuItem>
            <MenuItem eventKey={3.5}>Ember</MenuItem>
            <MenuItem eventKey={3.5}>Node</MenuItem>
            </NavDropdown>
            <SearchBar />
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Header;
