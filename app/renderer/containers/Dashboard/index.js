import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router';
import { ipcRenderer } from 'electron';
import Container from '../../components/Container';
import Icon from '../../components/Icon';
import styles from './Dashboard.css';

export default class Dashboard extends Component {
	render() {
		ipcRenderer.on('key', (event, params) => {
			console.log(params);
		});

		const settingsClasses = cn(styles.icon, styles.iconSettings);
		return (<Container>
				<Link to="/settings">
					<Icon glyph="cog" className={settingsClasses} />
				</Link>
			</Container>);
	}
}
