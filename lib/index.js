import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JobListings from './components/jobListings';
import JobShow from './components/jobShow';
require('../css/custom.css');

let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;

class App extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentDidMount() {
    $.getJSON('https://lookingforme.herokuapp.com/api/v1/jobs', (response) => { this.setState({ jobs: response }); });
  }

  render() {
    return (
      <div className="application">
        <Header />
        <JobListings jobs={this.state.jobs.jobs}/>
      </div>
    );
  }
};

const NotFound = ({}) => {
  return <h1>Not Found!</h1>
}

let routes = (
  <Router>
    <Route path="/" component={App}/>
    <Route path="/job/:jobId" component={JobShow}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('application'));

//class JobShow extends React.Component {
  //constructor() {
    //super();
    //this.state = { job: {} };
  //}

  //componentDidMount() {
    //let job = {
      //id: 1,
      //title: "Software Engineer (.Net) at SmashFly Technologies (Concord, CA)",
      //description: "As a Software Engineer at SmashFly, What youll be contributing to:At SmashFly, you will be building marketing automation software for recruiting. What weve created is truly best-in-class software that helps companies attract and proactively communicate with todays top talent.",
      //url: "http://stackoverflow.com/jobs/117479/software-engineer-net-smashfly-technologies",
      //location: ".Net",
      //posted_date: "2016-06-02",
      //remote: false,
      //raw_technologies: [
        //{id: 1, name: ".net"},
        //{id: 2, name: "c#"},
        //{id: 3, name: "angularjs"},
        //{id: 4, name: "angular"}
      //],
      //company: {
        //id: 2502,
        //name: "SmashFly Technologies"
      //}
    //}
    //this.setState({ job: job });
  //}
  //render() {
    //return (
      //<div className="container">
        //<Job key={this.state.job.id} job={this.state.job} />
      //</div>
    //);
  //}
//}

//class JobListings extends React.Component {
  //constructor() {
    //super();
  //}

  //render() {
    //if (this.props.jobs !== undefined) {
      //return(
        //<div className="container">
        //{ this.props.jobs.map((job) => {
          //return <Job key={job.id} job={job} fullListing={false}/>;
        //})}
        //</div>
      //);
    //} else {
      //return <div>Awaiting AJAX request</div>
    //}
  //}
//}

//const Technology = ({technology}) => {
  //return (<li>{technology}</li>)
//}

//const Job = ({job, fullListing}) => {
  //function createMarkup() { return {__html: fullListing ? job.description : trimBody(job.description, 100)}; };
  //if (typeof job.title !== "undefined"){
    //return(
        //<div className="jobListing">
          //<h2>{job.title}</h2>
          //<div className="row">
            //<h4 className="col-md-4">{job.company.name}</h4>
            //<h4 className="col-md-4">Location: {job.location}</h4>
            //<h4 className="col-md-4">Date posted: {job.posted_date}</h4>
          //</div> {[> <!-- row --> <]}
          //<div className="row">
            //<div className="col-md-6">
              //<div className="content">
                //<div className="dangerous" dangerouslySetInnerHTML={createMarkup()}></div>
                //<a className="btn btn-default" target="_blank" href={job.url}>View job posting</a>
              //</div> {[> <!-- content --> <]}
            //</div>
            //<div className="col-md-6">
              //<div className="content">
                //<p>Technologies:</p>
                //<ul>
                //{job.raw_technologies.map((technology) => {
                  //return (<li><Technology key={technology.id} technology={technology.name}/></li>)
                //})}
                //</ul>
                //{fullListing ? "" : <a className="btn btn-default" href="/#/job/1">View Details</a>}
                //{fullListing ? <a href="/">Back to all jobs</a> : ""}
              //</div>{[> content --> <]}
            //</div>
          //</div>{[> row --> <]}
        //</div>
    //)
  //} else {
    //return <p>waiting</p>
  //}
//}

//const trimBody = (bodyText, maxLength) => {
  //if (bodyText.length > maxLength) {
    //let trimmedString = bodyText.substr(0, maxLength);
    //trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
    //return trimmedString + "...";
  //} else {
    //return bodyText;
  //}
//}
