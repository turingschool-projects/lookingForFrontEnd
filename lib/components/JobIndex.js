import React from 'react';
import Header from './Header';
import SearchBarAndListings from './SearchBarAndListings';

class JobIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBarAndListings />
        </div>
      </div>
    );
  }
};

export default JobIndex;
