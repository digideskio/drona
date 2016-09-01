import { ipcMain } from 'electron';
import drone from './drone';

export function getNavData(event) {
	drone.onNavData(data => {
		if (!data) {
			return;
		}

		event.sender.send('DATA_RECEIVE', data);
	});
}

export default function init() {
	ipcMain.on('VIDEO_REQUEST', event => {
		drone.server().then(success => {
			event.sender.send('VIDEO_RECEIVE', success);
		});
	});

	ipcMain.on('DATA_REQUEST', event => {
		getNavData(event);
	});
}
