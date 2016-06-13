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

  getRecentJobsJSON() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?page=${this.state.activePage}`,
      (response) => {
        this.setState({ jobs: response, lastCall: "all" });
      });
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

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  sendSearchQuery() {
    let
      searchInput = this.state.inputValue.toLowerCase(),
      techSearch = this.checkSearchInput(searchInput);

    this.setState({
      activePage: 1
    }, function() {
      techSearch ? this.setJobs("technology", searchInput) : this.setJobs("location", searchInput);
    });
  }

  checkSearchInput(searchInput){
    let
      techSearch = false,
      technologies = ["ruby", "rails", "javascript", "react", "go", "ember", "clojure", "angular", "python"];

    for (let i = 0; i < technologies.length; i++){
      if (searchInput === technologies[i]){
        techSearch = true;
      }
    }
    return techSearch;
  }

  setJobs(parameter, searchInput) {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?${parameter}=${searchInput}&page=${this.state.activePage}`,
      (response) => {
        this.setState({ jobs: response, lastCall: parameter });
      });
  }

  handlePageSelect(eventKey) {
    this.setState({
      activePage: eventKey
    }, function() {
      if (this.state.lastCall === "all") {
        this.getRecentJobsJSON();
      } else {
        this.setJobs(this.state.lastCall, this.state.inputValue);
      }
      window.scrollTo(0, 0);
    });
  }

  render() {
    let recentJobs = this.state.jobs.recent_jobs;

    return (
      <div>
        <div className="search-bar">
          <FormGroup>
            <FormControl type="text" placeholder="Search jobs by location or technology" id="search-bar-input" onChange={this.handleInputChange.bind(this)}/>
          </FormGroup>
          <Button className="find-jobs-button" type="submit" onClick={this.sendSearchQuery.bind(this)}>Search by filter</Button>
          <Button className="find-jobs-button" type="submit" onClick={this.handleAllJobsClick.bind(this)}>See all jobs</Button>
        </div>
        <div>
          {(this.state.lastCall === "all") ? <h3> Latest Jobs </h3> : <h3>Search Results</h3>}
          {(recentJobs !== undefined) ? <JobListings jobs={recentJobs}/> : (recentJobs !== undefined) ? <JobListings jobs={recentJobs}/> : "Loading..." }
        </div>
        <div className="footer">
          <Pagination
          prev
          next
          first
          last
          ellipsis
          items={30}
          maxButtons={5}
          activePage={this.state.activePage}
          onSelect={this.handlePageSelect.bind(this)} />
        </div>
      </div>
    )
  }
}

export default SearchBarAndListings;
