import React from 'react';
import Job from './job';

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.jobs !== undefined) {
      return(
        <div className="container">
        { this.props.jobs.map((job) => {
          return <Job key={job.id} job={job} fullListing={false} />;
        })}
        </div>
      );
    } else {
      return <div>Awaiting AJAX request</div>
    }
  }
}

export default JobListings;
