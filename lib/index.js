import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  render() {
    return (
      <div className="container">
        <Header />
        <JobListings />
      </div>
    );
  }
});

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>Hello World, Header</header>
    )
  }
}

class JobListings extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>Jerbs</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('application'));
