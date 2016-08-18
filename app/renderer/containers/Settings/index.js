import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from '../../components/Icon';
import SettingsModal from '../../components/SettingsModal';

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
