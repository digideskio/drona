import { ipcRenderer } from 'electron';

export const VIDEO_REQUEST = 'VIDEO_REQUEST';
export const VIDEO_RECEIVE = 'VIDEO_RECEIVE';

export function requestVideo() {
	ipcRenderer.send(VIDEO_REQUEST);

	return {
		type: VIDEO_REQUEST
	};
}

export function receiveVideo(payload) {
	return {
		type: VIDEO_RECEIVE,
		payload
	};
}