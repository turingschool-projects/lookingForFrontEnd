import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  },
});
