import React from 'react';
import ReactDOM from 'react-dom';

var Root = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
});


ReactDOM.render(<Root name='World'/>, document.getElementById('container'));
