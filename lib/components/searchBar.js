import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import JobListings from './JobListings';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {value: ""};
    this.state = { jobs: {} };
  }

  HandleChange(event) {
    this.setState({value: event.target.value});
  }

  SendLocationRequest() {
    var search_location = this.state.value;
    $.getJSON("http://localhost:3000/api/v1/recent_jobs?location=" + search_location, (response) => { this.setState({ jobs: response }); });
    // $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + search_location, (response) => { this.setState({ jobs: response }); });
  }

  render() {
    return (
      <div className="search-bar">
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search jobs" onChange={this.HandleChange.bind(this)}/>
            </FormGroup>
              {' '}
            <Button type="submit" onClick={this.SendLocationRequest.bind(this)}>Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </div>
    );
  }

}

  // const SendLocationRequest = ({}) => {
    // console.log("hey")
  //  return (
  //      <div>Numbers of Jackals: {jackals.length}</div>
  //  );
 // };



export default SearchBar;
