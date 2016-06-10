import React from 'react';
import Header from './Header';
import JobListings from './JobListings';
import { Pagination } from 'react-bootstrap';

class JobIndex extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [], activePage: 1 };
  }

  componentDidMount() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/jobs?page=${this.state.activePage}`, (response) => { this.setState({ jobs: response }); });
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/jobs?page=${this.state.activePage}`, (response) => { this.setState({ jobs: response }); });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <JobListings jobs={this.state.jobs.jobs}/>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
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
