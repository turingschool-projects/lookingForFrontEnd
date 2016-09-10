import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
require('../css/custom.css');
import JobShow from './components/JobShow';
import JobIndex from './components/JobIndex';
import TrendsIndex from './components/TrendsIndex';

let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={JobIndex}/>
    <Route path="/jobs/:jobId" component={JobShow}/>
    <Route path="/trends" component={TrendsIndex}/>
    <Route path="*" component={JobIndex}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('application'));
