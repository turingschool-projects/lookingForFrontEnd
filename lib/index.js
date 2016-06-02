import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <JobListings />
      </div>
    );
  }
};

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>Hello World, Header</header>
    );
  }
}

class JobListings extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentWillMount() {
    let sampleJobs = require('./sample-jobs');
    this.setState({ jobs: sampleJobs });
  }

  render() {
    let allJobs = this.state.jobs.map((job) => {
      let technologies = job.raw_technologies.map((technology) =>
        {
          return (<li>{technology}</li>);
        });
      return (
        <div className="jobListing">
          <h3>{job.title}</h3>
          <h5>{job.company.name}</h5>
          <p>{job.description}</p>
          <a target="_blank" href={job.url}>View job</a>
          <p>Location: {job.location}</p>
          <p>Date posted: {job.posted_date}</p>
          <p>Remote? {job.remote ? 'Yes' : 'No'}</p>
          <div>Technologies:
            <ul>{technologies}</ul>
          </div>
        </div>
      );
    });

    return(
      <div>{allJobs}</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('application'));
