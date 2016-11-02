import React from 'react';
import Header from './Header';
import JobDetail from './JobDetail';
import axios from 'axios';

const LookingForService = require('../LookingForService');

class JobShow extends React.Component {
  constructor() {
    super();
    this.state = { job: {} };
  }

  componentDidMount() {
    LookingForService.getSingleJob.bind(this)
  }

  render() {
    if (this.state.job.job !== undefined) {
      return (
        <div>
          <Header />
          <div className="container">
            <JobDetail key={this.state.job.job.id} job={this.state.job.job} />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

export default JobShow;
