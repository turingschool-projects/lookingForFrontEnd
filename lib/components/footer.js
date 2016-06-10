import React from 'react';
import { Pagination } from 'react-bootstrap';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          items={40}
          maxButtons={5}
          activePage={this.props.activePage}
          onSelect={this.props.handleSelect} />
      </div>
    )
  }
}

export default Footer;
