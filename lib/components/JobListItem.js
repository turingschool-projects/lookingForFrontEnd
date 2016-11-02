import React from 'react';
import Technology from './Technology';
// import helpers from '../helpers';
import { Link } from 'react-router';

class JobListItem extends React.Component {
  constructor() {
    super();

    this.state = { isFavorite: false };
  }

  render() {
    if (typeof this.props.job.title !== "undefined") {
      return (
        <div className="container job-listing row">
          <h3 className="job-title">{this.props.job.title}</h3>
          <div className="col-sm-4 column">
            <div className="content">
              <h5>{this.props.job.company.name}</h5>
              <p>Date posted: {this.props.job.posted_date}</p>
              {this.props.job.remote ? <p>Remote</p> : ""}
            </div>
          </div>
          <div className="col-sm-4 column">
            <div className="content row">
              <Technology technologies={this.props.job.technologies} />
            </div>
          </div>
          <div className="col-sm-4 column">
            <div className="content">
              <Link to={`/jobs/${this.props.job.id}`} className="btn btn-default">View Details</Link><br></br><br></br>
              {this.renderFavoritesButton()}
            </div>
          </div>
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }

  renderFavoritesButton() {
    if (!this.state.isFavorite) {
      return (
        <div>
          <button className="btn btn-default" onClick={this.addToFavorites.bind(this)}>Add To Favorites</button>
        </div>
      )
    }
    return (
      <div>
        <button className="btn btn-default" onClick={this.removeFromFavorites.bind(this)}>Remove From Favorites</button>
      </div>
    )
  }

  addToFavorites() {
    this.setState({ isFavorite: true });
  }

  removeFromFavorites() {
    this.setState({ isFavorite: false });
  }
}

export default JobListItem;
