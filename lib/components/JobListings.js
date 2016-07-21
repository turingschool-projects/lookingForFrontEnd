import React from 'react';
import JobListItem from './JobListItem';

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.jobs.length > 0) {
      return(
        <div>
          {this.props.jobs.map((job) => {
            return <JobListItem key={job.id} job={job} />
          })}
        </div>
      );
    } else {
      return <h3 className="no-results-message">No results match your search</h3>
    }
  }
}

export default JobListings;
