import React from 'react';

class TechnologyItem extends React.Component{
  render(){
    return (
      <p>{this.props.technology.name}</p>
    )
  }
}

export default TechnologyItem;
