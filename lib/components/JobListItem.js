import _ from 'lodash';
import React from 'react';
import Technology from './Technology';
// import helpers from '../helpers';
import { Link } from 'react-router';

class JobListItem extends React.Component {
  constructor() {
    super();
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
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
          <button className="btn btn-default" onClick={this.addToFavorites}>Add To Favorites</button>
        </div>
      )
    }
    return (
      <div>
        <button className="btn btn-default" onClick={this.removeFromFavorites}>Remove From Favorites</button>
      </div>
    )
  }

  addToFavorites() {
    this.setState({ isFavorite: true });
    localStorage.setItem( 'favoriteJobs', `${localStorage.favoriteJobs}, ${this.props.job.id}` );
  }

  removeFromFavorites() {
    const job = this.props.job.id
    this.setState({ isFavorite: false });
    const savedFavorites = localStorage.getItem('favoriteJobs').split(',').splice(1);
    let updatedFavorites = _.remove(savedFavorites, function(n) {
      return n != job;
    });
    localStorage.clear();
    updatedFavorites.forEach(function (favorite) {
      localStorage.setItem( 'favoriteJobs', `${localStorage.favoriteJobs}, ${favorite}`)
    })
  }
}

export default JobListItem;
