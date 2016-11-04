import _ from 'lodash';
import React from 'react';
import Technology from './Technology';
import ReferJobButton from './ReferJobButton';
// import helpers from '../helpers';
import { Link } from 'react-router';
import axios from 'axios';

class JobListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.handleFavorites = this.handleFavorites.bind(this)
    this.openEmailInput = this.openEmailInput.bind(this)

    this.state = {favorites: this.handleFavorites(this.props.job.id), inputs: false}
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
        </div>
        </div>
        {this.renderRefferedButton()}
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }

  renderRefferedButton() {
    if (!this.state.inputs) {
      return (
        <div>
        <button className='btn btn-default col-lg-offset-5' onClick={this.openEmailInput}>Refer Job to Friend</button>
        </div>
      )
    } else {
      return (
        <div className='col-lg-offset-5'>
        <form>
        <input type='email'/>
        <button className='btn btn-default' onClick={this.sendEmail}>Email</button>
        </form>
        </div>
      )
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

  renderReferButton() {
    if (!this.state.inputs) {
      return (
        <ReferJobButton  viewInputs={this.state.inputs} onClick={this.openEmailInput}/>
      )
    } else {
      return (
        <ReferJobButton  viewInputs={this.state.inputs} onClick={this.closeEmailInput}/>
      )
    }
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
    this.setState({ inputs: true });
  }

  sendEmail() {
    axios.post(`https://lookingforme.herokuapp.com/`)
  }
}



export default JobListItem;
