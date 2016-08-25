import { app, BrowserWindow, Menu } from 'electron';
import drone from './drone/drone';

export default function createWindow() {
	let menu;
	let template;

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

	if (process.platform === 'darwin') {
		template = [{
			label: 'Electron',
			submenu: [{
				label: 'About ElectronReact',
				selector: 'orderFrontStandardAboutPanel:'
			}, {
				type: 'separator'
			}, {
				label: 'Quit',
				accelerator: 'Command+Q',
				click() {
					app.quit();
				}
			}]
		}, {
			label: 'Controls',
			submenu: [{
				label: 'Takeoff',
				accelerator: 'T',
				click() {
					drone.takeoff();
				}
			}, {
				label: 'Land',
				accelerator: 'L',
				click() {
					drone.land();
				}
			}]
		}];

		menu = Menu.buildFromTemplate(template);
		Menu.setApplicationMenu(menu);
	} else {
		template = [{
			label: '&File',
			submenu: [{
				label: '&Open',
				accelerator: 'Ctrl+O'
			}, {
				label: '&Close',
				accelerator: 'Ctrl+W',
				click() {
					mainWindow.close();
				}
			}]
		}, {
			label: '&View',
			submenu: (process.env.NODE_ENV === 'development') ? [{
				label: '&Reload',
				accelerator: 'Ctrl+R',
				click() {
					mainWindow.restart();
				}
			}, {
				label: 'Toggle &Full Screen',
				accelerator: 'F11',
				click() {
					mainWindow.setFullScreen(!mainWindow.isFullScreen());
				}
			}, {
				label: 'Toggle &Developer Tools',
				accelerator: 'Alt+Ctrl+I',
				click() {
					mainWindow.toggleDevTools();
				}
			}] : [{
				label: 'Toggle &Full Screen',
				accelerator: 'F11',
				click() {
					mainWindow.setFullScreen(!mainWindow.isFullScreen());
				}
			}]
		}, {
			label: 'Help',
			submenu: [{
				label: 'Learn More',
				click() {
					shell.openExternal('http://electron.atom.io');
				}
			}, {
				label: 'Documentation',
				click() {
					shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme');
				}
			}, {
				label: 'Community Discussions',
				click() {
					shell.openExternal('https://discuss.atom.io/c/electron');
				}
			}, {
				label: 'Search Issues',
				click() {
					shell.openExternal('https://github.com/atom/electron/issues');
				}
			}]
		}];
		menu = Menu.buildFromTemplate(template);
		mainWindow.setMenu(menu);
	}

	return mainWindow;
}