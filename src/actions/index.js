import axios from 'axios';

const API_KEY = '352457c47896e75983ec18ceb5198ad0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

// make async Ajax request (that doesn't look async -- redux-promise helps clean it up!)
export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`
	// request will return a promise that we transfer to the payload
	// const request = axios.get(url);
	// console.log the promise
	// console.log('Request:', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
