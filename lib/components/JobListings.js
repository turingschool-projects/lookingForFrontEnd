import { Navbar, FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import React from 'react';
import JobListItem from './JobListItem';
var $ = require('jquery');

class JobListings extends React.Component {
  constructor() {
    super();
    this.state = { jobs: {}, activePage: 1 }
  }

  componentDidMount() {
    this.getAllRecentJobs();
  }

  getAllRecentJobs() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?page=${this.state.activePage}`,
      (response) => {
        this.setState({ jobs: response, lastCall: "all" });
      });
  }

  getFilteredJobs(parameter, searchInput) {
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
        this.getAllRecentJobs();
      } else {
        this.getFilteredJobs(this.state.lastCall, this.state.inputValue);
      }
      window.scrollTo(0, 0);
    });
  }

  render() {
    let recentJobs = this.state.jobs.recent_jobs;
      if (!$.isEmptyObject(this.state.jobs)) {
        debugger;
        return(
          <div>
          {(this.props.lastCall === "all") ? <h3> Latest Jobs </h3> : <h3>Search Results</h3>}
          {(recentJobs !== undefined) ? <JobListings jobs={recentJobs}/> : (recentJobs !== undefined) ? <JobListings jobs={recentJobs}/> : "Loading..." }
            {this.props.jobs.map((job) => {
              return <JobListItem key={job.id} job={job} />
            })}
          </div>
        );
      } else {
        return <h3 className="no-results-message">No results match your search</h3>
      }
      <div className="footer">
        <Pagination
        prev
        next
        first
        last
        ellipsis
        items={30}
        maxButtons={5}
        activePage={this.props.activePage}
        onSelect={this.handlePageSelect.bind(this)} />
      </div>
  }
}

export default JobListings;
