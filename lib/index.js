import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Router, Route, browserHistory, Link } from 'react-router';
require('../css/custom.css');

class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/jobs', (response) => { this.setState({ jobs: response }); });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <JobListings jobs={this.state.jobs.jobs}/>
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
      <div>
        <Header />
        <div className="container">
          <Job key={this.state.job.id} job={this.state.job} fullListing={true}/>
        </div>
      </div>
    );
  }
};

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
              <Link to="/">Looking For</Link>
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
  }

  render() {
    if (this.props.jobs !== undefined) {
      return(
        <div>
        { this.props.jobs.map((job) => {
          return <Job key={job.id} job={job} fullListing={false}/>;
        })}
        </div>
      );
    } else {
      return <div>Awaiting AJAX request</div>
    }
  }
}

const Technology = ({technology}) => {
  return (<li>{technology}</li>)
}

const Job = ({job, fullListing}) => {
  if (typeof job.title !== "undefined"){
    return(
      <div className="jobListing">
        <h3>{job.title}</h3>
        <h5>{job.company.name}</h5>
        <a target="_blank" href={job.url}>View job posting</a>
        <p>{fullListing ? job.description : trimBody(job.description, 100)}</p>
        <p>Location: {job.location}</p>
        <p>Date posted: {job.posted_date}</p>
        <div>Technologies:
          <ul>
            {job.raw_technologies.map((technology) => {
              return (<Technology key={technology.id} technology={technology.name}/>)
            })}
          </ul>
        </div>
        {fullListing ? "" : <button><Link to="/job/1">View Details</Link></button>}
        {fullListing ? <Link to="/">Back to all jobs</Link> : ""}
      </div>
    )
  } else {
    return <p>waiting</p>
  }
}

const trimBody = (bodyText, maxLength) => {
  if (bodyText.length > maxLength) {
    let trimmedString = bodyText.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  } else {
    return bodyText;
  }
}

const NotFound = ({}) => {
  return <h1>Not Found!</h1>
}

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={JobIndex}/>
    <Route path="/job/:jobId" component={JobShow}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('application'));
