import { BrowserWindow } from 'electron';
import createMenu from './createMenu';

export default function createWindow() {
	const mainWindow = new BrowserWindow({
		show: false,
		width: 1024,
		height: 768,
		center: true,
		resizable: process.env.NODE_ENV === 'development',
		fullscreenable: false,
		backgroundColor: '#253048',
		title: 'Drona'
	});

	mainWindow.loadURL(`file://${__dirname}/../renderer/app.html`);

	mainWindow.webContents.on('did-finish-load', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	if (process.env.NODE_ENV === 'development') {
		mainWindow.openDevTools();
	}

	createMenu(mainWindow);

	return mainWindow;
}
