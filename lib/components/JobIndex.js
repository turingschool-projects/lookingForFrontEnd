import React from 'react';
import Header from './Header';
import Footer from './Footer';
import JobListings from './JobListings';

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
        <Footer activePage={1} handleSelect={this.handleSelect.bind(this)}/>
      </div>
    );
  }
};

export default JobIndex;
