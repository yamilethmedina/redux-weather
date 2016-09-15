import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	// renders a single city (row)
	renderWeather(cityData) {

		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		console.log(temps);
		return(
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart data={temps} color="orange" />
				</td>
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