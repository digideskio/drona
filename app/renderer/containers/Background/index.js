import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/video';
import Background from './Background';

function mapStateToProps(state) {
	return {
		video: state.video
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Background);
