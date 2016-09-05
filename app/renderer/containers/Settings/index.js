import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/settings';
import Settings from './Settings';

function mapStateToProps({ settings }) {
	return { settings };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
