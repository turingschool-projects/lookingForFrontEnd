import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
require('../public/custom.css');
let ReactRouter = require("react-router");
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let Navigation = ReactRouter.Navigation;

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="application">
          <Header />
        <div className="container">
          <JobListings />
        </div>
      </div>
    );
  }
};

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
      raw_technologies: [
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
      <Jerb key={this.state.job.id} job={this.state.job}/>
    );
  }
}

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Looking For</a>
            </Navbar.Brand>
            <JobSeachBar />
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

class JobSeachBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search-bar">
        <Navbar.Collapse>
        <Navbar.Form pullRight>
        <FormGroup>
        <FormControl type="text" placeholder="Search jobs" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
        </Navbar.Form>
        </Navbar.Collapse>
      </div>
    );
  }
}

class JobListings extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentDidMount() {
    let sampleJobs = require('./sample-jobs');
    this.setState({ jobs: sampleJobs });
  }

  render() {
    return(
      <div>
        { this.state.jobs.map((job) => {
          return <Job key={job.id} job={job}/>;
        })}
      </div>
    );
  }
}

const Technology = ({technology}) => {
  return (<li>{technology}</li>)
}

const Job = ({job}) => {
  return(
    <div className="jobListing">
      <h3>{job.title}</h3>
      <h5>{job.company.name}</h5>
      <p>{trimBody(job.description, 100)}</p>
      <a target="_blank" href={job.url}>View job posting</a>
      <p>Location: {job.location}</p>
      <p>Date posted: {job.posted_date}</p>
      <p>Remote? {job.remote ? 'Yes' : 'No'}</p>
      <div>Technologies:
        <ul>
          {job.raw_technologies.map((technology) => {
            return (<Technology key={technology.id} technology={technology.name}/>)
          })}
        </ul>
      </div>
      <button>View Details</button>
    </div>
  )
}

const Jerb = ({job}) => {
  console.log(job.company)
  if (typeof job.title === "undefined"){
    return( <p>waiting</p>)
  }
  else {
    return(
      <div className="jobListing">
        <h3>{job.title}</h3>
        <h5>{job.company.name}</h5>
        <p>{job.description}</p>
        <a target="_blank" href={job.url}>View job posting</a>
        <p>Location: {job.location}</p>
        <p>Date posted: {job.posted_date}</p>
        <p>Remote? {job.remote ? 'Yes' : 'No'}</p>
        <div>Technologies:
          <ul>
            {job.raw_technologies.map((technology) => {
              return (<Technology key={technology.id} technology={technology.name}/>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const trimBody = (bodyText, maxLength) => {
  if (bodyText.length > maxLength) {
    var trimmedString = bodyText.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  } else {
    return bodyText;
  }
}

var routes = (
  <Router>
    <Route path="/" component={App}/>
    <Route path="/job/:jobId" component={JobShow}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('application'));
// ReactDOM.render(<App/>, document.getElementById('application'));
