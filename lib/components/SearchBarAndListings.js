import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import JobListings from './JobListings';

class SearchBarAndListings extends React.Component {
  constructor() {
    super();
    this.state = { exampleJobs: [], jobs: [], inputValue: "" };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/recent_jobs', (response) => { this.setState({ exampleJobs: response.recent_jobs }); });
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  sendSearchQuery() {
    let searchInput = this.state.inputValue.toLowerCase();
    let techSearch = this.checkSearchInput(searchInput);
    techSearch ? this.setJobs("technology", searchInput) : this.setJobs("location", searchInput);
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

  setJobs(parameter, searchInput) {
    $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?" + parameter + "=" + searchInput, (response) => {
      this.setState({ jobs: response.recent_jobs }); });
  }

  render() {
      return (
      <div>
        <div className="search-bar">
              <FormGroup>
                <FormControl type="text" placeholder="Search jobs by location or technology" className="search-bar-input" onChange={this.handleChange.bind(this)}/>
              </FormGroup>
              <Button className="find-jobs-button" type="submit" onClick={this.sendSearchQuery.bind(this)}>Find jobs</Button>
        </div>
        <div>
          {(this.state.jobs.length !== 0) ?  <h3>Search Results</h3> : <h3> Latest Jobs </h3>}
          {(this.state.jobs.length !== 0) ? <JobListings jobs={this.state.jobs}/> : (this.state.exampleJobs.length !== 0) ? <JobListings jobs={this.state.exampleJobs}/> : "Loading..." }
        </div>
      </div>
      )
    }
}

export default SearchBarAndListings;
