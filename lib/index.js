import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
require('../public/custom.css');

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="application">
          <Header />
        <div className="container">
          <JobListings />
        </div>
      </div>
    );
  }
};

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Looking For</a>
            </Navbar.Brand>
            <JobSeachBar />
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

class JobSeachBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search-bar">
        <Navbar.Collapse>
        <Navbar.Form pullRight>
        <FormGroup>
        <FormControl type="text" placeholder="Search jobs" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
        </Navbar.Form>
        </Navbar.Collapse>
      </div>
    );
  }
}

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>Jerbs</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('application'));
