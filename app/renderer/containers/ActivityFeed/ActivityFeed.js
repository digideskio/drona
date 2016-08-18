import React, { Component } from 'react';
import Message from '../../components/Message';

import styles from './ActivityFeed.css';

export default class ActivityFeed extends Component {
	render() {
		return (<div className={styles.container}>
			<Message glyph="cross" message="Message three" />
			<Message glyph="home" message="Message two" />
			<Message glyph="cog" message="Message one" />
		</div>);
	}
}