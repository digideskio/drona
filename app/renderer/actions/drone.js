import { ipcRenderer } from 'electron';

export const TAKE_OFF = 'TAKE_OFF';
export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_RECEIVE = 'DATA_RECEIVE';

export function requestData() {
	ipcRenderer.send(DATA_REQUEST);

	return {
		type: DATA_REQUEST
	};
}

export function takeOff() {
	ipcRenderer.send(TAKE_OFF);

	return {
		type: TAKE_OFF
	};
}

export function receiveData(payload) {
	return {
		type: DATA_RECEIVE,
		payload
	};
}
