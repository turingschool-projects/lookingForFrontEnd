import React from 'react';
import Header from './Header';
import JobListings from './JobListings';
import { Pagination } from 'react-bootstrap';

class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [], activePage: 1 };
  }

  getJSON() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/jobs?page=${this.state.activePage}`,
      (response) => { this.setState({ jobs: response }); }
    );
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.getJSON();
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    this.getJSON();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <JobListings jobs={this.state.jobs.jobs}/>
        </div>
        <div className="footer">
          <Pagination
          prev
          next
          first
          last
          ellipsis
          items={40}
          maxButtons={5}
          activePage={this.state.activePage}
          onSelect={this.handleSelect.bind(this)} />
        </div>
      </div>
    );
  }
};

export default JobIndex;
