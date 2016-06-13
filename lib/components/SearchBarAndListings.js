import { Navbar, FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import React from 'react';
import JobListings from './JobListings';

class SearchBarAndListings extends React.Component {
  constructor() {
    super();
    this.state = { jobs: {}, inputValue: "", activePage: 1, lastCall: "all" };
  }

  componentDidMount() {
    this.getRecentJobsJSON();
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleAllJobsClick() {
    this.setState({
      activePage: 1
    }, function() {
      this.getRecentJobsJSON();
      this.state.inputValue = "";
      document.getElementById('search-bar-input').value = "";
    });
  }

  getRecentJobsJSON() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?page=${this.state.activePage}`,
      (response) => {
        this.setState({ jobs: response, lastCall: "all" });
        window.scrollTo(0, 0);
      });
  }

  sendLocationRequest() {
    let searchLocation = this.state.inputValue;
    $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + searchLocation,
      (response) => {
        this.setState({ jobs: response, lastCall: "location" });
      });
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    }, function() {
      this.getRecentJobsJSON();
    });
  }

  render() {
    let
      searchLocation = this.state.inputValue,
      recentJobs = this.state.jobs.recent_jobs;

    return (
      <div>
        <div className="search-bar">
          <FormGroup>
            <FormControl type="text" placeholder="Search jobs by location" id="search-bar-input" onChange={this.handleInputChange.bind(this)}/>
          </FormGroup>
          <Button className="find-jobs-button" type="submit" onClick={this.sendLocationRequest.bind(this)}>Find jobs by location</Button>
          <Button className="find-jobs-button" type="submit" onClick={this.handleAllJobsClick.bind(this)}>See all jobs</Button>
        </div>
        <div>
          {(recentJobs !== undefined) ? <h3>Search Results For {searchLocation}</h3> : <h3> Latest Jobs </h3>}
          {(recentJobs !== undefined) ? <JobListings jobs={recentJobs}/> : (recentJobs !== undefined) ? <JobListings jobs={recentJobs}/> : "Loading" }
        </div>
        <div className="footer">
          {(this.state.lastCall === "all") ?
            <Pagination
            prev
            next
            first
            last
            ellipsis
            items={30}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect.bind(this)} /> : ""
          }
        </div>
      </div>
    )
  }
}

export default SearchBarAndListings;
