import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/drone';
import Dashboard from './Dashboard';

function mapStateToProps({ drone }) {
	return { drone };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
