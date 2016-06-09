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
    if (typeof this.props.job.title !== "undefined"){
        return(
        <div className="container jobListing">
          <h2>{this.props.job.title}</h2>
            <div className="col-md-6  text-center">
              <div className="content">
              <h4>Company: {this.props.job.company.name}</h4>
              <h4>{this.props.job.location}</h4>
              <h4>Date posted: {this.props.job.posted_date}</h4>
                <div className="dangerous" dangerouslySetInnerHTML={this.createMarkup()}></div>
              </div> {/* <!-- content --> */}
            </div>
            <div className="col-md-6">
              <div className="content">
                <Technology technologies={this.props.job.technologies} />
                <div className="job-buttons">
                  {this.props.fullListing ? "" : <button className="btn btn-default"><Link to="/job/1">View Details</Link></button>}
                  {this.props.fullListing ? <button className="btn btn-default"><Link to="/">Back to all jobs</Link></button> : ""}
                  {this.props.fullListing ? <Link className="btn btn-default" target="_blank" to={this.props.job.url}>View Job Posting</Link> : ""}
                </div>
              </div>
            </div>
          </div>
      )
    } else {
      return <p>waiting</p>
    }
  }
};

export default Job;
