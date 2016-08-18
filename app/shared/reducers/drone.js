import * as Actions from '../actions/drone';

const initialState = {
	error: null,
	drone: null,
	video: null
};

export default function drone(state = initialState, action) {
	switch (action.type) {
		case Actions.VIDEO_RECEIVE:
			return Object.assign({}, state, {
				video: true
			});
		default:
			return state;
	}
}
