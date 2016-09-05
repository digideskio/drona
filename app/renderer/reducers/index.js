import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import drone from './drone';
import settings from './settings';
import video from './video';

export default function getRootReducer() {
	const reducers = {
		drone,
		routing,
		settings,
		video
	};

	return combineReducers({ ...reducers });
}
