import React from 'react';

class TechnologyItem extends React.Component{
  render(){
    return (
      <li>{this.props.technology.name}</li>
    )
  }
}

export default TechnologyItem;
