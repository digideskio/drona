import * as Actions from '../actions/settings';
import { settings as initialState } from './initialState';

export default function settings(state = initialState, action) {
	console.log('Settings reducer', action);
	switch (action.type) {
		default:
			return state;
	}
}
