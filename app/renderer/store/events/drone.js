import { ipcRenderer } from 'electron';

import * as Actions from '../../actions/drone';

export default function init(store) {
	ipcRenderer.on('ALTITUDE_RECEIVE', (event, payload) => {
		store.dispatch(Actions.receiveAltitude(payload));
	});
}
