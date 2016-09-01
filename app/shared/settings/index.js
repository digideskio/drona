import fs from 'fs';
import defaultSettings from './default.json';
import userSettings from './user.json';

const settings = {
	changeHandlers: [],
	change: function change() {
		this.changeHandlers.forEach(handler => {
			handler.call(null, this.getSettings());
		});
	},
	onChange: function onChange(cb) {
		return this.changeHandlers.push(cb);
	},
	saveUserSettings: function saveUserSettings(newUserSettings, cb) {
		fs.writeFile('./user.json', (err) => {
			if (err) {
				throw err;
			}

			this.userSettings = newUserSettings;
			this.change();
			cb(this.getSettings);
		});
	},
	getSettings: () => Object.assign({}, defaultSettings, userSettings),

};

export default settings;

