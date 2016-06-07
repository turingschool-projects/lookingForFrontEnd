import React from 'react';

class Technology extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="col-md-6">
        <div className="content">
          <p>Technologies:</p>
          <ul>
            {this.props.technologies.map((technology) => {
              return (<TechnologyItem key={technology.id} technology={technology}/>)
              })
            }
          </ul>
        </div>{/* <!-- content --> */}
      </div>
    )
  }
};

class TechnologyItem extends React.Component{
  render(){
    return ( <li>{this.props.technology.name}</li>)
  }
}

export default Technology;
