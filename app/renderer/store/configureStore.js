import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import getRootReducer from '../reducers';
import events from './events';

export default function configureStore(initialState, scope = 'main') {
	const logger = createLogger({
		level: 'info',
		collapsed: true,
	});
	const router = routerMiddleware(hashHistory);

	const middleware = [
		thunk,
		promise,
		router
	];

	if (!process.env.NODE_ENV) {
		middleware.push(logger);
	}

	const enhanced = [
		applyMiddleware(...middleware),
	];

	const rootReducer = getRootReducer(scope);
	const enhancer = compose(...enhanced);
	const store = createStore(rootReducer, initialState, enhancer);

	if (!process.env.NODE_ENV && module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(require('../reducers'));
		});
	}

	events(store);

	return store;
}
