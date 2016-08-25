import * as Actions from '../actions/drone';
import { drone as initialState } from './initialState';

export default function drone(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
