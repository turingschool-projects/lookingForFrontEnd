import React from 'react';
import Header from './Header';
import TechnologyCount from './TechnologyCount';
import axios from 'axios';

const LookingForService = require('../LookingForService');

class TrendsIndex extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getJobTechCountData();
  }

  getJobTechCountData() {
    LookingForService.getJobTechCount.call(this)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <TechnologyCount data={this.state.data} />
        </div>
      </div>
    );
  };
};

export default TrendsIndex;
