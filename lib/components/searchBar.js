import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';

class SearchBar extends React.Component {
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

export default SearchBar;
