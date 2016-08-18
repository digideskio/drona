import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../../shared/actions/drone';
import Video from './Video';

function mapStateToProps(state) {
	console.log('M', state);
	return state.drone;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
