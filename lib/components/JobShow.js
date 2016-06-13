import React from 'react';
import Job from './Job';
import Header from './Header';
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
            <Job key={this.state.job.job.id} job={this.state.job.job} fullListing={true} />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}



export default JobShow;
