import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';

import styles from './Info.css';

export default class Info extends Component {
	render() {
		return (<div className={styles.container}>
			<Icon glyph={this.props.glyph} className={styles.icon} />
			<h3 className={styles.info}>{this.props.message}</h3>
		</div>);
	}
}

Info.propTypes = {
	message: PropTypes.string.isRequired,
	glyph: PropTypes.string.isRequired
};
