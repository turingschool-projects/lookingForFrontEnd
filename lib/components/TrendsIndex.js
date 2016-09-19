import React from 'react';
import Header from './Header';
import TechnologyCount from './TechnologyCount';

class TrendsIndex extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  };

  componentDidMount() {
    this.getJobTechCountData();
  };

  getJobTechCountData() {
    $.getJSON(`https://lookingforme.herokuapp.com/api/v1/current_openings_technology_count`,
      (response) => {
        this.setState({ data: response.trends });
      });
  };

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
