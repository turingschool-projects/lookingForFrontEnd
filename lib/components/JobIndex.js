import React from 'react';
import Header from './Header';
import JobListings from './JobListings';
import SearchBarAndListings from './SearchBarAndListings';

class JobIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header /> <br></br>
        <div className="container">
          <SearchBarAndListings />
        </div>
      </div>
    );
  }
};

export default JobIndex;
