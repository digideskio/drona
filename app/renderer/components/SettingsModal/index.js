import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';
import styles from './SettingsModal.css';

export default class SettingsModal extends Component {
	render() {
		const { onCloseIconClick } = this.props;

		return (<div className={styles.modal}>
			<h1 className={styles.title}>Settings</h1>
			<Icon glyph="cross" className={styles.closeIcon} onClick={onCloseIconClick} />
		</div>);
	}
}

SettingsModal.propTypes = {
	onCloseIconClick: PropTypes.func.isRequired
};
