import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';
import KeyBinding from '../KeyBinding';

import styles from './SettingsModal.css';

export default class SettingsModal extends Component {
	render() {
		const { onCloseIconClick } = this.props;

		return (<div className={styles.modal}>
			<h1 className={styles.title}>Settings</h1>
			<Icon glyph="cross" className={styles.closeIcon} onClick={onCloseIconClick} />
			<div className={styles.keyBindingContainer}>
				<h2>Key Bindings</h2>
				<div>
					<KeyBinding label="Take off" settingsKey="takeoff" value="Q" onChange={() => {}} />
					<KeyBinding label="Take off" settingsKey="takeoff" value="Q" onChange={() => {}} />
				</div>
				<div>
					<KeyBinding label="Take off" settingsKey="takeoff" value="Q" onChange={() => {}} />
					<KeyBinding label="Take off" settingsKey="takeoff" value="Q" onChange={() => {}} />
					<KeyBinding label="Take off" settingsKey="takeoff" value="Q" onChange={() => {}} />
					<KeyBinding label="Take off" settingsKey="takeoff" value="Q" onChange={() => {}} />
				</div>
			</div>
		</div>);
	}
}

SettingsModal.propTypes = {
	onCloseIconClick: PropTypes.func.isRequired
};
