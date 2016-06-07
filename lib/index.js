import React from 'react';
import ReactDOM from 'react-dom';
import JobShow from './components/jobShow';
import App from './components/app';
import helpers from './helpers';
require('../css/custom.css');

let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;

let routes = (
  <Router>
    <Route path="/" component={App}/>
    <Route path="/job/:jobId" component={JobShow}/>
    <Route path="*" component={helpers.notFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('application'));
