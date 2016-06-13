import React from 'react';
import Technology from './Technology';
import helpers from '../helpers';
import { Link } from 'react-router';

class Job extends React.Component {
  constructor() {
    super();
  }

  createMarkup() {
    return {__html: this.props.fullListing ? this.props.job.description : "" };
  }

  render() {
    if (typeof this.props.job.title !== "undefined" && this.props.fullListing) {
      return(
      <div className="container job-listing">
        <h4 className="job-title">{this.props.job.title}</h4>
        <div className="content">
          <div className="dangerous description" dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>
        <div className="container row">
          <div className="col-sm-6 column">
            <div className="content">
              <Technology technologies={this.props.job.technologies} />
            </div>
          </div>
          <div className="col-sm-6 column">
            <div className="content">
              <p>Date posted: {this.props.job.posted_date}</p>
              {this.props.job.remote ? <p>Remote</p> : ""}
              <Link to="/" className="btn btn-default job-buttons">Back to Search</Link>
              <Link className="btn btn-default job-buttons" target="_blank" to={this.props.job.url}>View Job Posting</Link>
            </div>
          </div>
        </div>
      </div>
      )
    } else if (typeof this.props.job.title !== "undefined") {
      return (
        <div className="container job-listing row">
          <h3 className="job-title">{this.props.job.title}</h3>
          <div className="col-sm-4 column">
            <div className="content">
              <h5>{this.props.job.company.name}</h5>
              <p>Date posted: {this.props.job.posted_date}</p>
              {this.props.job.remote ? <p>Remote</p> : ""}
              <div className="dangerous" dangerouslySetInnerHTML={this.createMarkup()}></div>
            </div>
          </div>
          <div className="col-sm-4 column">
            <div className="content row">
              <Technology technologies={this.props.job.technologies} />
            </div>
          </div>
          <div className="col-sm-4 column">
            <div className="content">
              {this.props.fullListing ? "" : <Link to={`/jobs/${this.props.job.id}`} className="btn btn-default">View Details</Link>}
            </div>
          </div>
        </div>
      )
    } else {
      return <p>Waiting for AJAX call</p>
    }
  }
}

export default Job;
