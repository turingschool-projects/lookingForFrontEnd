import React from 'react';
import Job from './job';

class JobShow extends React.Component {
  constructor() {
    super();
    this.state = { job: {} };
  }

  componentDidMount() {
    let job = {
      id: 1,
      title: "Software Engineer (.Net) at SmashFly Technologies (Concord, CA)",
      description: "As a Software Engineer at SmashFly, What youll be contributing to:At SmashFly, you will be building marketing automation software for recruiting. What weve created is truly best-in-class software that helps companies attract and proactively communicate with todays top talent.",
      url: "http://stackoverflow.com/jobs/117479/software-engineer-net-smashfly-technologies",
      location: ".Net",
      posted_date: "2016-06-02",
      remote: false,
      technologies: [
        {id: 1, name: ".net"},
        {id: 2, name: "c#"},
        {id: 3, name: "angularjs"},
        {id: 4, name: "angular"}
      ],
      company: {
        id: 2502,
        name: "SmashFly Technologies"
      }
    }
    this.setState({ job: job });
  }

  render() {
    return (
      <div className="container">
        <Job key={this.state.job.id} job={this.state.job} fullListing={true} />
      </div>
    );
  }
}



export default JobShow;
