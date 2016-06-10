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
    let search_location = this.state.value;
    $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + search_location, (response) => {
       this.setState({ jobs: response }); });
  }

  render() {
    return (
      <div>
        <div className="search-bar">
              <FormGroup>
                <FormControl type="text" placeholder="Search jobs by location" className="search-bar-input" onChange={this.HandleChange.bind(this)}/>
              </FormGroup>
              <Button type="submit" onClick={this.SendLocationRequest.bind(this)}>Find jobs</Button>
        </div>
        <div>
          {(this.state.jobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.jobs.recent_jobs}/> : "" }
        </div>
      </div>
    )
  }
}

export default SearchBarAndListings;
