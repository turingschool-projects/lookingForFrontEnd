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
        <div className="jobListing">
          <h2>{this.props.job.title}</h2>
          <div className="row">
            <h4 className="col-md-4">{this.props.job.company.name}</h4>
            <h4 className="col-md-4">Location: {this.props.job.location}</h4>
            <h4 className="col-md-4">Date posted: {this.props.job.posted_date}</h4>
          </div> {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="dangerous" dangerouslySetInnerHTML={this.createMarkup()}></div>
                <a className="btn btn-default" target="_blank" href={this.props.job.url}>View job posting</a>
              </div> {/* <!-- content --> */}
              <Technology technologies={this.props.job.technologies} />
              {this.props.fullListing ? "" : <button><Link to={`/jobs/${this.props.job.id}`}>View Details</Link></button>}
              {this.props.fullListing ? <Link to="/">Back to all jobs</Link> : ""}
            </div>
          </div>{/* <!-- row --> */}
        </div>
      )
    } else {
      return <p>waiting</p>
    }
  }
};

export default Job;
