import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import drone from './drone';

export default function getRootReducer(scope = 'main') {
	let reducers = {
		drone
	};

	if (scope === 'renderer') {
		reducers = {
			...reducers,
			routing
		};
	}

	return combineReducers({ ...reducers });
}
