import React from 'react';
import Job from './Job';

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.jobs.length > 0) {
      return(
        <div>
          {this.props.jobs.map((job) => {
            return <Job key={job.id} job={job} fullListing={false} />
          })}
        </div>
      );
    } else {
      return <div>No results matched your search</div>
    }
  }
}

export default JobListings;
