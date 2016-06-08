import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';

class SideBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li>
              <p>Ruby</p>
            </li>
            <li>
              <p>Ruby</p>
            </li>
            <li>
              <p>Ruby</p>
            </li>
            <li>
              <p>Ruby</p>
            </li>
            <li>
              <p>Ruby</p>
            </li>
            <li>
              <p>Ruby</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
