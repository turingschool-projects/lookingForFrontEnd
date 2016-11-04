import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import JobListings from './Joblistings';
import JobListingsFooter from './JobListingsFooter';
import axios from 'axios';

const LookingForService = require('../LookingForService');

class JobIndex extends React.Component {
  constructor() {
    super();
    this.addToFavorites = this.addToFavorites.bind(this)
    this.removeFromFavorites = this.removeFromFavorites.bind(this)

    this.state = { activePage: 1, lastCall: "all" };
  }

  componentDidMount() {
    LookingForService.getRecentJobs.call(this)
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
    LookingForService.getFilteredJobs.call(this, parameter, searchInput)
  }

  addToFavorites(jobId) {
    localStorage.setItem( 'favoriteJobs', `${localStorage.favoriteJobs}, ${jobId}` );
  }

  removeFromFavorites(jobId) {
    const savedFavorites = localStorage.getItem('favoriteJobs').split(',').splice(1); // splice removes undefined from localStorage
    let updatedFavorites = _.remove(savedFavorites, (n) => {return n != jobId});

    localStorage.removeItem('favoriteJobs');
    updatedFavorites.forEach(function (favorite) {
      localStorage.setItem( 'favoriteJobs', `${localStorage.favoriteJobs}, ${favorite}`)
    })
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
              <JobListings jobs={recentJobs} lastCall={this.state.lastCall} addToFavorites={this.addToFavorites} removeFromFavorites={this.removeFromFavorites} />
              <JobListingsFooter jobs={recentJobs}  handlePageSelect={this.handlePageSelect.bind(this)} activePage={this.state.activePage} />
            </div>
          }
        </div>
      </div>
    );
  }
};

export default JobIndex;
