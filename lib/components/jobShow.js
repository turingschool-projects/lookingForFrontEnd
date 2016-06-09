import React from 'react';
import Job from './Job';

class JobShow extends React.Component {
  constructor() {
    super();
    debugger
    this.state = { job: {} };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1' + location.pathname, (response) => { this.setState({ job: response }); });
    // $.getJSON('https://lookingforme.herokuapp.com/api/v1/jobs/1', (response) => { this.setState({ job: response }); });
  }

  render() {
    if (this.state.job.job !== undefined) {
      return (
        <div className="container">
          <Job key={this.state.job.job.id} job={this.state.job.job} fullListing={true} />
        </div>
      );
    } else {
      return <div>Awaiting AJAX request</div>
    }
  }
}



export default JobShow;
