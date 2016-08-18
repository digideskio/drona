import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';

import styles from './Message.css';

export default class Message extends Component {
	render() {
		return (<div className={styles.container}>
			<Icon glyph={this.props.glyph} className={styles.icon} />
			<h3 className={styles.message}>{this.props.message}</h3>
		</div>);
	}
}

Message.propTypes = {
	message: PropTypes.string.isRequired,
	glyph: PropTypes.string.isRequired
};
