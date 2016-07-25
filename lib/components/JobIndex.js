import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import JobListings from './Joblistings'


class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { activePage: 1, lastCall: "all" };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar />
          <JobListings activePage={this.activePage} lastCall={this.lastCall}/>
        </div>
      </div>
    );
  }
};

export default JobIndex;
