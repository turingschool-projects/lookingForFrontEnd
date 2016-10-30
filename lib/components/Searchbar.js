import { Navbar, FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
  }

  handleAllJobsClick() {
    this.setState({
      activePage: 1
    }, function() {
      this.getAllRecentJobs();
      this.state.inputValue = "";
      document.getElementById('search-bar-input').value = "";
    });
  }

  checkReturn(event) {
    if (event.keyCode === 13) { this.sendSearchQuery(); }
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  sendSearchQuery() {
    let
      searchInput = this.state.inputValue.toLowerCase(),
      techSearch = this.checkSearchInput(searchInput);

    this.setState({
      activePage: 1
    }, function() {
      techSearch ? this.props.getFilteredJobs("technology", searchInput) : this.props.getFilteredJobs("location", searchInput);
    });
  }

  checkSearchInput(searchInput){
    let
      techSearch = false,
      technologies = ["ruby", "rails", "javascript", "react", "go", "ember", "clojure", "angular", "python"];

    for (let i = 0; i < technologies.length; i++){
      if (searchInput === technologies[i]){
        techSearch = true;
      }
    }
    return techSearch;
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <FormGroup>
            <FormControl type="text" placeholder="Search jobs by location or technology" id="search-bar-input" onChange={this.handleInputChange.bind(this)} onKeyUp={this.checkReturn.bind(this)}/>
          </FormGroup>
          <Button className="find-jobs-button" type="submit" onClick={this.sendSearchQuery.bind(this)}>Search by filter</Button>
          <Button className="find-jobs-button" type="submit" onClick={this.handleAllJobsClick.bind(this)}>See all jobs</Button>
        </div>
      </div>
    )
  }
}

export default SearchBar;
