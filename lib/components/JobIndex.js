import React from 'react';
import Header from './header';
import SideBar from './SideBar';
import JobListings from './JobListings';

class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/jobs', (response) => { this.setState({ jobs: response }); });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SideBar />
          <JobListings jobs={this.state.jobs.jobs}/>
        </div>
      </div>
    );
  }
};

export default JobIndex;
