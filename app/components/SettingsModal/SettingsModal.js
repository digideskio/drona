import React, { Component, PropTypes } from 'react';
import styles from './SettingsModal.css';

export default class SettingsModal extends Component {
	render() {
		return (<div className={styles.modal}>
			{this.props.children}
		</div>);
	}
}

SettingsModal.propTypes = {
	children: PropTypes.element.isRequired
};
