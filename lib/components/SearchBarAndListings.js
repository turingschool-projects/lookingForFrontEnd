import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import JobListings from './JobListings';

class SearchBarAndListings extends React.Component {
  constructor() {
    super();
    this.state = { exampleJobs: {}, jobs: {}, inputValue: "" };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/recent_jobs', (response) => { this.setState({ exampleJobs: response }); });
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  sendLocationRequest() {
    let searchInput = this.state.inputValue.toLowerCase();
    let techSearch = this.checkSearchInput(searchInput);
    if (techSearch){
      $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?technology=" + searchInput, (response) => {
       this.setState({ jobs: response }); });
    }
    else {
      $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + searchInput, (response) => {
       this.setState({ jobs: response }); });
    }
  }

  checkSearchInput(searchInput){
    let techSearch = false;
    let technologies = ["ruby", "rails", "javascript", "react", "go", "ember", "clojure", "angular", "python"];
    for (let i = 0; i < technologies.length; i++){
      if (searchInput === technologies[i]){
        techSearch = true;
      }
    }
    return techSearch;
  }

  render() {
      return (
      <div>
        <div className="search-bar">
              <FormGroup>
                <FormControl type="text" placeholder="Search jobs by location" className="search-bar-input" onChange={this.handleChange.bind(this)}/>
              </FormGroup>
              <Button className="find-jobs-button" type="submit" onClick={this.sendLocationRequest.bind(this)}>Find jobs</Button>
        </div>
        <div>
          {(this.state.jobs.recent_jobs !== undefined) ?  <h3>Search Results</h3> : <h3> Latest Jobs </h3>}
          {(this.state.jobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.jobs.recent_jobs}/> : (this.state.exampleJobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.exampleJobs.recent_jobs}/> : "Loading..." }
        </div>
      </div>
      )
    }
}

export default SearchBarAndListings;
