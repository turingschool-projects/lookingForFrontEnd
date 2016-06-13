import React from 'react';
import Header from './Header';
import SearchBarAndListings from './SearchBarAndListings';
import { Pagination } from 'react-bootstrap';


class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { activePage: 1 };
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
