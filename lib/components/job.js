import React from 'react';
import Technology from './technology';

class Job extends React.Component {
  constructor() {
    super();
  }

  //var createmarkup = () => {
    //return {__html: fulllisting ? job.description : trimbody(job.description, 100)};
                //<div className="dangerous" dangerouslySetInnerHTML={createMarkup()}></div>
  //};
                //{fullListing ? "" : <a className="btn btn-default" href="/#/job/1">View Details</a>}
                //{fullListing ? <a href="/">Back to all jobs</a> : ""}
                  //{this.props.job.raw_technologies.map((technology) => {
                    //return (<li><Technology key={technology.id} technology={technology}/></li>)

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
                <a className="btn btn-default" target="_blank" href={this.props.job.url}>View job posting</a>
              </div> {/* <!-- content --> */}
              <Technology technologies={this.props.job.raw_technologies} />
            </div>
          </div>{/* <!-- row --> */}
        </div>
      )
    } else {
      return <p>waiting</p>
    }
  }
}

export default Job;
