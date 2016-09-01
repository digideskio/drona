import { app } from 'electron';
import createMainWindow from './createMainWindow';
import droneEventHandler from './drone/rendererEventHandler';

let mainWindow = null;

if (process.env.NODE_ENV === 'development') {
	require('electron-debug')();
}

function doCreateMainWindow() {
	mainWindow = createMainWindow();
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
	droneEventHandler(mainWindow);
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		doCreateMainWindow();
	}
});

app.on('ready', doCreateMainWindow);
