import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
require('../public/custom.css');

class App extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/jobs', (response) => { this.setState({ jobs: response }) });
  }

  render() {
    return (
      <div className="application">
          <Header />
        <div className="container">
          <JobListings jobs={this.state.jobs.jobs}/>
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
  }

  render() {
    if (this.props.jobs !== undefined) {
      return(
        <div>
        { this.props.jobs.map((job) => {
          return <Job key={job.id} job={job}/>;
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

const trimBody = (bodyText, maxLength) => {
  if (bodyText.length > maxLength) {
    var trimmedString = bodyText.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  } else {
    return bodyText;
  }
}

ReactDOM.render(<App/>, document.getElementById('application'));
