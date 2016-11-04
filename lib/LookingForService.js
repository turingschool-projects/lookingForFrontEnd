import axios from 'axios';

class LookingForService {
  constructor() {
  }
}

module.exports = {
  getRecentJobs: function() {
    axios.get(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?page=${this.state.activePage}`)
      .then(response => response.data)
      .then(response => this.setState({ jobs: response.recent_jobs, lastCall: "all" }))
      .catch(error => console.log(error));
  },

  getFilteredJobs: function(parameter, searchInput) {
      axios.get(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?${parameter}=${searchInput}&page=${this.state.activePage}`)
        .then(response => response.data)
        .then(response => this.setState({ jobs: response.recent_jobs, lastCall: parameter }))
        .catch(error => console.log(error));
  },

  getSingleJob: function() {
    axios.get(`https://lookingforme.herokuapp.com/api/v1${location.pathname}`)
      .then(response => response.data)
      .then(response => this.setState({ job: response }))
      .catch(error => console.log(error));
  },

  getJobTechCount: function() {
    axios.get(`https://lookingforme.herokuapp.com/api/v1/current_openings_technology_count`)
      .then(response => response.data)
      .then(response => this.setState({ data: response.trends }))
      .catch(error => console.log(error));
  }
};
// TO DO:
// figure out how to connect the response data to the service invocation
// consult on whether promises should be handled in here or when the service is invoked
