import React from 'react';
import Header from './header';
import JobListings from './JobListings';

class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
    this.update = false;
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/jobs', (response) => { this.setState({ jobs: response }); });
  }

  shouldComponentUpdate() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      alert("hey")
      this.update = true;
    }
    return this.update;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <JobListings jobs={this.state.jobs.jobs}/>
        </div>
      </div>
    );
  }
};

export default JobIndex;
