import { ipcRenderer } from 'electron';

export const ALTITUDE_RECEIVE = 'ALTITUDE_RECEIVE';
export const TAKE_OFF = 'TAKE_OFF';
export const DATA_REQUEST = 'DATA_REQUEST';

export function requestData() {
	ipcRenderer.send(DATA_REQUEST);

	return {
		type: DATA_REQUEST
	};
}

export function receiveAltitude(payload) {
	return {
		type: ALTITUDE_RECEIVE,
		payload
	};
}

export function takeOff() {
	ipcRenderer.send(TAKE_OFF);

	return {
		type: TAKE_OFF
	};
}
