import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import JobListings from './JobListings';

class SearchBarAndListings extends React.Component {
  constructor() {
    super();
    this.state = { example_jobs: {}, jobs: {}, input_value: "" };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/recent_jobs', (response) => { this.setState({ example_jobs: response }); });
  }

  HandleChange(event) {
    this.setState({input_value: event.target.value});
  }

  SendLocationRequest() {
    let search_location = this.state.input_value;
    $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + search_location, (response) => {
       this.setState({ jobs: response }); });
  }

  render() {
    if (this.state.jobs.recent_jobs !== undefined) {
      return (
      <div>
        <div className="search-bar">
              <FormGroup>
                <FormControl type="text" placeholder="Search jobs by location" className="search-bar-input" onChange={this.HandleChange.bind(this)}/>
              </FormGroup>
              <Button type="submit" onClick={this.SendLocationRequest.bind(this)}>Find jobs</Button>
        </div>
        <div>
          <h3>Search results for {this.state.input_value}</h3>{<JobListings jobs={this.state.jobs.recent_jobs}/>}
        </div>
      </div>
      )
    } else {
      return (
        <div>
          <div className="search-bar">
                <FormGroup>
                  <FormControl type="text" placeholder="Search jobs by location" className="search-bar-input" onChange={this.HandleChange.bind(this)}/>
                </FormGroup>
                <Button type="submit" onClick={this.SendLocationRequest.bind(this)}>Find jobs</Button>
          </div>
          <div>
            <h3>Latest Jobs</h3> {(this.state.example_jobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.example_jobs.recent_jobs}/> : "Loading" }
          </div>
        </div>
      )
    }
  }
}

export default SearchBarAndListings;
