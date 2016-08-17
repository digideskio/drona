import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import drone from './drone';
import messages from './messages';

const rootReducer = combineReducers({
	drone,
	messages,
	routing
});

export default rootReducer;
