import React from 'react';
import Header from './Header';
import JobDetail from './JobDetail'

class JobShow extends React.Component {
  constructor() {
    super();
    this.state = { job: {} };
  }

  componentDidMount() {
    let request = new Request(
      `https://lookingforme.herokuapp.com/api/v1${location.pathname}`,
      { method: 'GET' }
    );

    fetch(request)
      .then(response => response.json())
      .then(response => this.setState({ job: response }))
      .catch(error => console.log(error));
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
