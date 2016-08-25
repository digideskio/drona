import * as Actions from '../actions/video';
import { video as initialState } from './initialState';

export default function videoReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.VIDEO_RECEIVE:
			if (action.payload === true) {
				return Object.assign({}, state, {
					connected: true,
					error: null
				});
			}
			return Object.assign({}, state, {
				connected: false,
				error: 'Something went wrong'
			});
		default:
			return state;
	}
}
