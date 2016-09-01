import { app, Menu } from 'electron';
import drone from './drone/drone';
import settings from '../shared/settings';

export function setGlobalKeyboardHandlers(mainWindow, currentSettings) {
	const keyBindings = currentSettings.keyBindings;
	const speed = currentSettings.speed;

	const menu = [{
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
			accelerator: test > 0.5 ? keyBindings.takeoff : 'P',
			click: drone.takeoff
		}, {
			label: 'Land',
			accelerator: keyBindings.land,
			click: drone.land
		}, {
			label: 'Up',
			accelerator: keyBindings.up,
			click() {
				drone.up(speed.up);
			}
		}, {
			label: 'Down',
			accelerator: keyBindings.down,
			click() {
				drone.down(speed.down);
			}
		}, {
			label: 'Left',
			accelerator: keyBindings.left,
			click() {
				drone.left(speed.left);
			}
		}, {
			label: 'Right',
			accelerator: keyBindings.right,
			click() {
				drone.right(speed.right);
			}
		}, {
			label: 'Forward',
			accelerator: keyBindings.forward,
			click() {
				drone.forward(speed.forward);
			}
		}, {
			label: 'Backward',
			accelerator: keyBindings.backward,
			click() {
				drone.backward(speed.backward);
			}
		}, {
			label: 'Counter-clockwise',
			accelerator: keyBindings.counterClockwise,
			click() {
				drone.counterClockwise(speed.counterClockwise);
			}
		}, {
			label: 'Clockwise',
			accelerator: keyBindings.clockwise,
			click() {
				drone.clockwise(speed.clockwise);
			}
		}, {
			label: 'Stop and hold',
			accelerator: keyBindings.stop,
			click: drone.stop
		}]
	}];

	Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
}

export default function createMenu(mainWindow) {
	const currentSettings = settings.getSettings();

	settings.onChange(() => {
		setGlobalKeyboardHandlers(mainWindow, currentSettings);
	});
}
