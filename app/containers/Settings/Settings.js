import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, SettingsModal } from '../../components';

import styles from './Settings.css';

export default class Settings extends Component {
	render() {
		return (<SettingsModal>
			<Link to="/">
				<Icon glyph="cross" className={styles.closeIcon} />
			</Link>
		</SettingsModal>);
	}
}
