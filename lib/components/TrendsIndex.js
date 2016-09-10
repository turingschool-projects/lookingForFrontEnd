import React from 'react';
import Header from './Header';

class TrendsIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Hello Graph!</h1>
        </div>
      </div>
    );
  }
};

export default TrendsIndex;
