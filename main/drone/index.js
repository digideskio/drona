import { ipcMain } from 'electron';
import drone from './drone';

export default {
	initEvents: main => {
		ipcMain.on('VIDEO_REQUEST', () => {
			drone.server().then(address => {
				main.send('VIDEO_ADDRESS', address);
			});
		});
	}
};

