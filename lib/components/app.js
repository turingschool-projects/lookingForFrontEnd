import React from 'react';
import Header from './header';
import JobListings from './jobListings';

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

export default App;
