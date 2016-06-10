import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import JobListings from './JobListings';

class SearchBarAndListings extends React.Component {
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
    $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + search_location, (response) => {
       this.setState({ jobs: response }); });
  }

  render() {
    if (this.state.jobs.recent_jobs !== undefined) {
      return (
        <div>
          <div className="search-bar">
            <div>
              <h3>Search by location</h3>
            </div>
            <Navbar.Collapse>
              <Navbar.Form pullRight>
                <FormGroup>
                  <FormControl type="text" placeholder="Search jobs" className="search-bar-input" onChange={this.HandleChange.bind(this)}/>
                </FormGroup>
                  {' '}
                <Button type="submit" onClick={this.SendLocationRequest.bind(this)}>Submit</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </div>
          <div>
            <JobListings jobs={this.state.jobs.recent_jobs}/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="search-bar">
            <div>
              <h3>Search by location</h3>
            </div>
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
        </div>
      )
    }
  }
}

export default SearchBarAndListings;
