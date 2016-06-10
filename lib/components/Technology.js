import React from 'react';
import TechnologyItem from './TechnologyItem';

class Technology extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="technologies-list">
        <h5>Technologies</h5>
        {this.props.technologies.map((technology) => {
          return (<TechnologyItem key={technology.id} technology={technology}/>)
          })
        }
      </div>
    )
  }
};

export default Technology;
