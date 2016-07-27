import { Navbar, FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import React from 'react';
var $ = require('jquery');

class JobListingsFooter extends React.Component {
  constructor() {
    super();
  }

  render() {
    let recentJobs = this.props.jobs;

    if (recentJobs.length > 0) {
      return(
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
      );
    }
  }
}

export default JobListingsFooter;
