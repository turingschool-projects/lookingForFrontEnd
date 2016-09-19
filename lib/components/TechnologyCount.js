import React from 'react';
import rd3 from 'react-d3';

class TechnologyCount extends React.Component {
  constructor() {
    super();
  }

  render() {
    let data = this.props.data;

    let Treemap = rd3.Treemap

    return (
      <Treemap
        width={1000}
        height={500}
        title="Current Job Language Count (for past two months)"
        data={data}
        textColor="#484848"
        fontColor="12px"
        hoverAnimation={true}
      />
    );
  }
};

export default TechnologyCount;
