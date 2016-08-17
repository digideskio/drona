import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/drone';
import { Message } from '../../components';

import styles from './ActivityFeed.css';

export class ActivityFeed extends Component {
	render() {
		console.log('P', this.props);
		return null;
		return (<div className={styles.container}>
			<Message glyph="cross" message="Message three" />
			<Message glyph="home" message="Message two" />
			<Message glyph="cog" message="Message one" />
		</div>);
	}
}

function mapStateToProps(state) {
	console.log('mdtp');
	return {
		messages: state.messages
	};
}

function mapDispatchToProps(dispatch) {
	console.log('mdtp');
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
