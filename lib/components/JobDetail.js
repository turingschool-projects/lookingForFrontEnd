import React from 'react';
import Header from './Header';
import Technology from './Technology';
import helpers from '../helpers';
import { Link } from 'react-router';

class JobDetail extends React.Component {
  constructor() {
    super();
  }

  createMarkup() {
    return {__html: this.props.job.description };
  }

  render() {
    if (typeof this.props.job.title !== "undefined") {
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
              <Link to="/" className="btn btn-default job-buttons">Back to All Jobs</Link>
              <Link className="btn btn-default job-buttons" target="_blank" to={this.props.job.url}>View Job Posting</Link>
            </div>
          </div>
        </div>
      </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }
}

export default JobDetail
