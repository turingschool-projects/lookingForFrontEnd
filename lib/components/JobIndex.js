import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import JobListings from './Joblistings';
import JobListingsFooter from './JobListingsFooter';


class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { activePage: 1, lastCall: "all" };
  }

  componentDidMount() {
    this.getAllRecentJobs();
  }

  getAllRecentJobs() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?page=${this.state.activePage}`,
      (response) => {
        this.setState({ jobs: response.recent_jobs, lastCall: "all" });
      });
  }

  handlePageSelect(eventKey) {
    this.setState({
      activePage: eventKey
    }, function() {
      if (this.lastCall === "all") {
        this.getAllRecentJobs();
      } else {
        this.getFilteredJobs(this.lastCall, this.state.inputValue);
      }
      window.scrollTo(0, 0);
    });
  }

  getFilteredJobs(parameter, searchInput) {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?${parameter}=${searchInput}&page=${this.state.activePage}`,
      (response) => {
        this.setState({ jobs: response.recent_jobs, lastCall: parameter });
      });
  }

  render() {
    let recentJobs = this.state.jobs;
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar getFilteredJobs={this.getFilteredJobs.bind(this)} />
          {(!recentJobs) ?
            "Loading..." :
            <div id="listingsAndFooter">
              <JobListings jobs={recentJobs} lastCall={this.state.lastCall} />
              <JobListingsFooter jobs={recentJobs}  handlePageSelect={this.handlePageSelect.bind(this)} activePage={this.state.activePage} />
            </div>
          }
        </div>
      </div>
    );
  }
};

export default JobIndex;
