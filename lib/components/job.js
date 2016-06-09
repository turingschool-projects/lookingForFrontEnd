import React from 'react';
import Technology from './Technology';
import helpers from '../helpers';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';


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
          <div className="row">
            <h4 className="col-md-4">Company: {this.props.job.company.name}</h4>
            <h4 className="col-md-4">Location: {this.props.job.location}</h4>
            <h4 className="col-md-4">Date posted: {this.props.job.posted_date}</h4>
          </div>
            <div className="col-md-6  text-center">
              <div className="content">
                <div className="dangerous" dangerouslySetInnerHTML={this.createMarkup()}></div>
                <a className="btn btn-default view-job-button" target="_blank" href={this.props.job.url}>View job posting</a>
              </div> {/* <!-- content --> */}
            </div>
            <div className="col-md-6">
              <div className="content">
                <Technology technologies={this.props.job.technologies} />
                <div className="job-buttons">
                  {this.props.fullListing ? "" : <Button bsStyle="default"><Link to="/job/1">View Details</Link></Button>}
                  {this.props.fullListing ? <Button bsStyle="default"><Link to="/">Back to all jobs</Link></Button> : ""}
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
