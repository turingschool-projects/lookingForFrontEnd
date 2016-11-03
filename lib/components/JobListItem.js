import _ from 'lodash';
import React from 'react';
import Technology from './Technology';
import ReferJobButton from './ReferJobButton';
// import helpers from '../helpers';
import { Link } from 'react-router';

class JobListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.handleFavorites = this.handleFavorites.bind(this)

    this.state = this.handleFavorites(this.props.job.id)
  }

  handleFavorites(job_id) {
    if (localStorage.favoriteJobs) {
      return {isFavorite: localStorage.favoriteJobs.includes(job_id)}
    }
    return {isFavorite: false}
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
        <ReferJobButton />
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
    this.props.addToFavorites(this.props.job.id);
  }

  removeFromFavorites() {
    const job = this.props.job.id
    this.setState({ isFavorite: false });
    this.props.removeFromFavorites(this.props.job.id);
  }

  openEmailInput() {

  }
}

export default JobListItem;
