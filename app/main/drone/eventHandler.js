import { ipcMain } from 'electron';
import drone from './drone';

export function periodicallyGetAltitude(sender) {
	// TODO: get this info from the drone itself
	setInterval(drone.getAltitude.bind(this, altitude => {
		sender.send('ALTITUDE_RECEIVE', altitude);
	}), 1000);
}

export default function init() {
	ipcMain.on('VIDEO_REQUEST', event => {
		drone.server().then(success => {
			event.sender.send('VIDEO_RECEIVE', success);
		});
	});

	ipcMain.on('DATA_REQUEST', event => {
		periodicallyGetAltitude(event.sender);
	});
}
