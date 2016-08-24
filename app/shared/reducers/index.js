import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as mainReducer from '../../main/reducers';
import * as rendererReducer from '../../renderer/reducers';
import drone from './drone';

export default function getRootReducer(scope = 'main') {
	let reducers = {
		drone
	};

	if (scope === 'main') {
		reducers = {
			...reducers,
			...mainReducer,
			routing
		};
	}

	if (scope === 'renderer') {
		reducers = {
			...reducers,
			...rendererReducer,
			routing
		};
	}

	return combineReducers({ ...reducers });
}
