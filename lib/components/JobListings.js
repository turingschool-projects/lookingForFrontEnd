import { Navbar, FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import React from 'react';
import JobListItem from './JobListItem';

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    let recentJobs = this.props.jobs;
    if (recentJobs.length > 0) {
      return(
        <div id="jobListings">
        {(this.props.lastCall === "all") ? <h3> Latest Jobs </h3> : <h3>Search Results</h3>}
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
