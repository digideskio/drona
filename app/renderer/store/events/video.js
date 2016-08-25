import { ipcRenderer } from 'electron';

import * as Actions from '../../actions/video';

export default function init(store) {
	ipcRenderer.on('VIDEO_RECEIVE', (event, payload) => {
		store.dispatch(Actions.receiveVideo(payload));
	});
}
