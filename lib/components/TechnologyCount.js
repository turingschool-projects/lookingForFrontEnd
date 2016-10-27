import React from 'react';
import rd3 from 'react-d3';

class TechnologyCount extends React.Component {
  constructor() {
    super();
  }

  render() {
    let data = this.props.data;

    let Treemap = rd3.Treemap;
    // alter rd3 chart to be more usable (pie)
    // add click events to filtered search based on languages in

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
