import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {value: ""};
  }

  HandleChange(event) {
    this.setState({value: event.target.value});
  }

  SendLocationRequest() {
    //this.state.value
  }

  render() {
    return (
      <div className="search-bar">
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search jobs" onChange={this.HandleChange.bind(this)}/>
            </FormGroup>
              {' '}
            <Button type="submit" onClick={this.SendLocationRequest.bind(this)}>Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </div>
    );
  }

}

  // const SendLocationRequest = ({}) => {
    // console.log("hey")
  //  return (
  //      <div>Numbers of Jackals: {jackals.length}</div>
  //  );
 // };



export default SearchBar;
