import * as Actions from '../actions/drone';
import { drone as initialState } from './initialState';

export default function drone(state = initialState, action) {
	switch (action.type) {
		case Actions.ALTITUDE_RECEIVE:
			console.log('AA', Object.assign({}, state, {
				altitude: action.payload
			}));
			return Object.assign({}, state, {
				altitude: action.payload
			});
		default:
			return state;
	}
}
