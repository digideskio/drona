import * as Actions from '../../shared/actions/drone';

const initialState = {
	error: null,
	drone: null,
	video: null
};

export default function droneRenderer(state = initialState, action) {
	console.log('droneRenderer', action.type);
	switch (action.type) {
		case Actions.VIDEO_RECEIVE:
			if (action.payload === true) {
				return Object.assign({}, state, {
					video: true
				});
			}
			return Object.assign({}, state, {
				video: null,
				error: action.payload
			});
		default:
			return state;
	}
}
