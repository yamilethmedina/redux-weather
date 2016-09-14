import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	renderWeather(cityData) {
		return(
			<tr>
				<td>{cityData.city.name}</td>
			</tr>
			);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temp</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			);
	}
}

// mapStateToProps (what is difference between mapDispatchToProps?)

function mapStateToProps({ weather }) {
	return { weather }; // identical to { weather: weather } (ES6 syntax)
}


export default connect(mapStateToProps)(WeatherList);