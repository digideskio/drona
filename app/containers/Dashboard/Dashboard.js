import React, { Component } from 'react';
import cn from 'classnames';
import keydown from 'react-keydown';
import { Link } from 'react-router';
import { Container, Icon } from '../../components';
import { ActivityFeed } from './../ActivityFeed/ActivityFeed';

import styles from './Dashboard.css';

export default class Dashboard extends Component {
	componentWillReceiveProps( { keydown } ) {
		debugger;
		if ( keydown.event ) {
			// inspect the keydown event and decide what to do
			console.log( keydown.event.which );
		}
	}

	render() {
		const settingsClasses = cn(styles.icon, styles.iconSettings);
		return (<Container>
			<ActivityFeed />
			<Link to="/settings">
				<Icon glyph="cog" className={settingsClasses} />
			</Link>
		</Container>);
	}
}
