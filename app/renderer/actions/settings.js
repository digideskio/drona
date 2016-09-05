import { ipcRenderer } from 'electron';

export const UPDATE_KEYBINDINGS = 'UPDATE_KEYBINDINGS';

export function updateKeyBindings(payload) {
	debugger;
	ipcRenderer.send(UPDATE_KEYBINDINGS, payload);

	return {
		type: UPDATE_KEYBINDINGS
	};
}
