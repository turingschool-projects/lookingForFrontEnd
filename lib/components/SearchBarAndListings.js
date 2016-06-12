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

  handleChange(event) {
    this.setState({input_value: event.target.value});
  }

  sendLocationRequest() {
    let search_input = this.state.input_value.toLowerCase();
    let techSearch = this.checkSearchInput(search_input);
    if (techSearch){ //this can be inline
      //get tech endpoint here
      //don't think the new endpoint is pushed to production(yet), may have to use localhost to reach endpoint
    }
    else {
      $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + search_input, (response) => {
       this.setState({ jobs: response }); });
    }
  }

  checkSearchInput(search_input){
    let techSearch = false;
    let technologies = ["ruby", "rails", "javascript", "react", "go", "ember", "clojure", "angular", "python"];
    for (let i = 0; i < technologies.length; i++){ //this probably can be refactored
      if (search_input === technologies[i]){
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
          {(this.state.jobs.recent_jobs !== undefined) ?  <h3>Search Results For {this.state.input_value}</h3> : <h3> Latest Jobs </h3>}
          {(this.state.jobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.jobs.recent_jobs}/> : (this.state.example_jobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.example_jobs.recent_jobs}/> : "Loading" }
        </div>
      </div>
      )
    }
}

export default SearchBarAndListings;
