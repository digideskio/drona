export const TAKE_OFF = 'TAKE_OFF';
export const VIDEO_REQUEST = 'VIDEO_REQUEST';
export const VIDEO_RECEIVE = 'VIDEO_RECEIVE';

export function requestVideo() {
	return {
		type: VIDEO_REQUEST
	};
}

export function receiveVideo() {
	return {
		type: VIDEO_RECEIVE
	};
}

export function takeOff() {
	return {
		type: TAKE_OFF
	};
}
