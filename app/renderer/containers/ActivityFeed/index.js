import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../../shared/actions/drone';
import ActivityFeed from './ActivityFeed';

function mapStateToProps(state) {
	return {
		messages: state.messages
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
