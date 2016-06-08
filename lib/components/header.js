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
        <Navbar>
          <Navbar.Header id="brand">
            <Navbar.Brand>
              <a href="#"><img src="css/images/looking-for.png" alt="logo" height="42" width="42"/></a>
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
