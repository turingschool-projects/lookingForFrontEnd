import { Navbar, FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import React from 'react';
import JobListItem from './JobListItem';
var $ = require('jquery');

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    let recentJobs = this.props.jobs;
      if (recentJobs.length > 0) {
        return(
          <div>
          {(this.props.lastCall === "all") ? <h3> Latest Jobs </h3> : <h3>Search Results</h3>}
            {this.props.jobs.map((job) => {
              return <JobListItem key={job.id} job={job} />
            })}
          </div>
        );
      } else {
        return <h3 className="no-results-message">No results match your search</h3>
      }
      <div className="footer">
        <Pagination
        prev
        next
        first
        last
        ellipsis
        items={30}
        maxButtons={5}
        activePage={this.props.activePage}
        onSelect={this.props.handlePageSelect} />
      </div>
  }
}

export default JobListings;
