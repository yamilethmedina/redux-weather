import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
		// making a controlled component
		constructor(props) {
			super(props);

			this.state = { term: '' };

			// this (our instance of search bar) has a function called onInputChange. replace the existing onInputChange with the version that has been bound 
			this.onInputChange = this.onInputChange.bind(this);

			this.onFormSubmit = this.onFormSubmit.bind(this);
		}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		// prevent form submission
		event.preventDefault();

		// Go fetch weather data from API
		// api.openweathermap.org/data/2.5/forecast?q={CITY_NAME},{COUNTRY_CODE}&APPID=352457c47896e75983ec18ceb5198ad0
		// make sure that you get a confirmation that the user entered the correct name
		// City object: name, longitude, latitude
		// list object: an array of objects that are snapshots of weather data (3 hrs at a time) - temps in Kelvin

		// call the ActionCreator with the Ajax request

		this.props.fetchWeather(this.state.term);
		// clear search input
		this.setState({ term: '' });
	}
	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
			<span className="input-group-btn">
				<button type="submit" className="btn btn-secondary">
				Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	// whenever the action creator is called and returns an action, bind and make sure it goes down through the middleware
	return bindActionCreators( {fetchWeather}, dispatch)
}

// this container doesn't care about Redux's maintained state, so the first argument is null
export default connect(null, mapDispatchToProps)(SearchBar)