import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router';
import { Container, Icon } from '../../components';

import styles from './Dashboard.css';

export default class Dashboard extends Component {
	render() {
		const settingsClasses = cn(styles.icon, styles.iconSettings);
		return (<Container>
			<Link to="/settings">
				<Icon glyph="cog" className={settingsClasses} />
			</Link>
		</Container>);
	}
}
