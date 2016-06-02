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
    return(
      <div>
        { this.state.jobs.map((job) => {
          return <JobItem key={job.id} job={job}/>;
        })}
      </div>
    );
  }
}

// const technologies = (job) => {
//
// }

const JobItem = ({job}) => {
  let technologies = job.raw_technologies.map((technology) =>
    {
      return (<li>{technology}</li>);
    });
  return(
    <div className="jobListing">
      <h3>{job.title}</h3>
      <h5>{job.company.name}</h5>
      <p>{trimBody(job.description, 100)}</p>
      <a target="_blank" href={job.url}>View job posting</a>
      <p>Location: {job.location}</p>
      <p>Date posted: {job.posted_date}</p>
      <p>Remote? {job.remote ? 'Yes' : 'No'}</p>
      <div>Technologies:
        <ul>{technologies}</ul>
      </div>
      <button>View Details</button>
    </div>
  )
}

const trimBody = (bodyText, maxLength) => {
  if (bodyText.length > maxLength) {
    var trimmedString = bodyText.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  } else {
    return bodyText;
  }
}

// class JobListings extends React.Component {
//   constructor() {
//     super();
//     this.state = { jobs: [] };
//   }
//
//   componentWillMount() {
//     let sampleJobs = require('./sample-jobs');
//     this.setState({ jobs: sampleJobs });
//   }
//
//   trimBody(bodyText, maxLength) {
//     if (bodyText.length > maxLength) {
//       var trimmedString = bodyText.substr(0, maxLength);
//       trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
//       return trimmedString + "...";
//     } else {
//       return bodyText;
//     }
//   }
//
//   render() {
//     let allJobs = this.state.jobs.map((job) => {
//       let technologies = job.raw_technologies.map((technology) =>
//         {
//           return (<li>{technology}</li>);
//         });
//       return (
//         <div className="jobListing" key={job.id}>
//           <h3>{job.title}</h3>
//           <h5>{job.company.name}</h5>
//           <p>{this.trimBody(job.description, 100)}</p>
//           <a target="_blank" href={job.url}>View job posting</a>
//           <p>Location: {job.location}</p>
//           <p>Date posted: {job.posted_date}</p>
//           <p>Remote? {job.remote ? 'Yes' : 'No'}</p>
//           <div>Technologies:
//             <ul>{technologies}</ul>
//           </div>
//           <button>View Details</button>
//         </div>
//       );
//     });
//
//     return(
//       <div>{allJobs}</div>
//     )
//   }
// }

ReactDOM.render(<App/>, document.getElementById('application'));
