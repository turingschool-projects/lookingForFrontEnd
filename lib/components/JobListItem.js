import React from 'react';
import Technology from './Technology';
import helpers from '../helpers';
import { Link } from 'react-router';

class JobListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (typeof this.props.job.title !== "undefined") {
      return (
        <div className="container job-listing row">
          <h3 className="job-title">{this.props.job.title}</h3>
          <div className="col-sm-4 column">
            <div className="content">
              <h5>{this.props.job.company.name}</h5>
              <p>Date posted: {this.props.job.posted_date}</p>
              {this.props.job.remote ? <p>Remote</p> : ""}
            </div>
          </div>
          <div className="col-sm-4 column">
            <div className="content row">
              <Technology technologies={this.props.job.technologies} />
            </div>
          </div>
          <div className="col-sm-4 column">
            <div className="content">
              <Link to={`/jobs/${this.props.job.id}`} className="btn btn-default">View Details</Link>
            </div>
          </div>
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }
}

export default JobListItem;
