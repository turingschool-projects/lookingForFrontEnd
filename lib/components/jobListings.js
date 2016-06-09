import React from 'react';
import Job from './Job';

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.jobs !== undefined) {
      return(
        <div className="container">
        { this.props.jobs.slice(0, 50).map((job) => {
          return <Job key={job.id} job={job} fullListing={false} />;
        })}
        </div>
      );
    } else {
      return <div>Awaiting AJAX Request-jerb listing</div>
    }
  }
}

export default JobListings;
