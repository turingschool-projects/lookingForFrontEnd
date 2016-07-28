import React from 'react';
import Header from './Header';
import JobDetail from './JobDetail'
import $ from 'jquery';

class JobShow extends React.Component {
  constructor() {
    super();
    this.state = { job: {} };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1' + location.pathname, (response) => { this.setState({ job: response }); });
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
