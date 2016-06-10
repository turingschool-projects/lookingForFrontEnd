import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
require('../css/custom.css');
import JobShow from './components/JobShow';
import JobIndex from './components/JobIndex';
import helpers from './helpers';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={JobIndex}/>
    <Route path="/jobs/:jobId" component={JobShow}/>
    <Route path="*" component={helpers.notFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('application'));
