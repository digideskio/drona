import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import rootReducer from '../reducers';
import forwardToMain from './middleware/forwardToMain';
import forwardToRenderer from './middleware/forwardToRenderer';

import * as droneActions from '../actions/drone';

export default function configureStore(initialState, scope = 'main') {
	const actionCreators = {
		...droneActions,
		push,
	};

	const logger = createLogger({
		level: 'info',
		collapsed: true,
	});

	const router = routerMiddleware(hashHistory);
	let middleware = [
		thunk,
		logger,
		router
	];

	if (scope === 'renderer') {
		middleware = [
			forwardToMain,
			router,
			...middleware,
		];
	}

	if (scope === 'main') {
		middleware = [
			...middleware,
			forwardToRenderer,
		];
	}

	const enhancer = compose(
		applyMiddleware(middleware)// ,
		// window && window.devToolsExtension ?
		// 	window.devToolsExtension({ actionCreators }) :
		// 	noop => noop
	);

	const store = createStore(rootReducer, initialState, enhancer);

	if (window.devToolsExtension) {
		window.devToolsExtension.updateStore(store);
	}

	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
		);
	}

	return store;
}
