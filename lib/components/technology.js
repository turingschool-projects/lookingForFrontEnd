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
              return (<li>{technology.name}</li>)
              })
            }
          </ul>
        </div>{/* <!-- content --> */}
      </div>
    )
  }
};

export default Technology;
