import React from 'react';
import Job from './Job';

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.jobs.length > 0) {
      return (
        <div>
          {this.props.jobs.map((job) => {
            return <Job key={job.id} job={job} fullListing={false} />
          })}
        </div>
      );
    } else {
      return <h3 className="no-results-message">No results match your search</h3>
    }
  }
}

export default JobListings;
