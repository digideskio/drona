import { ipcMain } from 'electron';
import * as Actions from '../../shared/actions/drone';
import drone from './drone';

export const TAKE_OFF = 'TAKE_OFF';
export const VIDEO_REQUEST = 'VIDEO_REQUEST';
export const VIDEO_RECEIVE = 'VIDEO_RECEIVE';

export default function init(main, store) {
	console.log('Init main window events');
	ipcMain.on('VIDEO_REQUEST', () => {
		console.log('Request received for video');
		drone.server().then(success => {
			console.log(store.dispatch(Actions.receiveVideo(success)));
		});
	});
}
