import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	// console.log action recieved from reducer. The payload
	// console.log('Action received', action);


	// what part of the request do we want to save?
	// Object -> payload -> data object (contains city and list of forecast arrays)
	// Action.payload.data

	// Data structure like a list (show multiple days from multiple cities at a time)
	// show an array

	switch (action.type) {
		case FETCH_WEATHER:
			// add to existing state, not replacing existing state
			// return a new instance of state (new array) that includes all old weather data + new weather data
			// return state.concat([action.payload.data]);
			return [ action.payload.data, ... state];
			// [city, city, city]
			// new data appears at the top of the array
	}
	return state;
}