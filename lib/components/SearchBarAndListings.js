import { Navbar, FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import React from 'react';
import JobListings from './JobListings';

class SearchBarAndListings extends React.Component {
  constructor() {
    super();
    this.state = { example_jobs: {}, jobs: {}, input_value: "", activePage: 1 };
  }

  componentDidMount() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?page=${this.state.activePage}`,
      (response) => { this.setState({ example_jobs: response }); });
  }

  handleChange(event) {
    this.setState({input_value: event.target.value});
  }

  sendLocationRequest() {
    let search_location = this.state.input_value;
    $.getJSON("https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=" + search_location, (response) => {
       this.setState({ jobs: response }); });
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    }, function() {
      $.getJSON(`https://lookingforme.herokuapp.com/api/v1/recent_jobs?page=${this.state.activePage}`,
        (response) => {
          window.scrollTo(0, 0);
          this.setState({ example_jobs: response });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <FormGroup>
            <FormControl type="text" placeholder="Search jobs by location" className="search-bar-input" onChange={this.handleChange.bind(this)}/>
          </FormGroup>
          <Button className="find-jobs-button" type="submit" onClick={this.sendLocationRequest.bind(this)}>Find jobs</Button>
        </div>
        <div>
          {(this.state.jobs.recent_jobs !== undefined) ? <h3>Search Results For {this.state.input_value}</h3> : <h3> Latest Jobs </h3>}
          {(this.state.jobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.jobs.recent_jobs}/> : (this.state.example_jobs.recent_jobs !== undefined) ? <JobListings jobs={this.state.example_jobs.recent_jobs}/> : "Loading" }
        </div>
        <div className="footer">
          {(this.state.input_value.length === 0) ?
            <Pagination
            prev
            next
            first
            last
            ellipsis
            items={30}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect.bind(this)} /> : ""
          }
        </div>
      </div>
    )
  }
}

export default SearchBarAndListings;
