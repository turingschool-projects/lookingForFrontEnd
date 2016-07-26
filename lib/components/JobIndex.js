import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import JobListings from './Joblistings'


class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { activePage: 1, lastCall: "all" };
  }

  getFilteredJobs(parameter, searchInput) {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?${parameter}=${searchInput}&page=${this.state.activePage}`,
      (response) => {
        this.setState({ jobs: response, lastCall: parameter });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar getFilteredJobs={this.getFilteredJobs.bind(this)}/>
          <JobListings jobs={this.jobs} lastCall={this.lastCall}/>
        </div>
      </div>
    );
  }
};

export default JobIndex;
