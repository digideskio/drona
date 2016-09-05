import { ipcRenderer } from 'electron';

import * as Actions from '../../actions/settings';

export default function init(store) {
	ipcRenderer.on('SETTINGS_RECEIVE', (event, payload) => {
		console.log('Settings received', payload);
		// store.dispatch(Actions.receiveVideo(payload));
	});
}
