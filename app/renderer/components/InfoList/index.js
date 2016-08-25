import React, { Component } from 'react';
import Info from '../Info';

import styles from './InfoList.css';

export default class InfoList extends Component {
	render() {
		return (<div className={styles.container}>
			<Info glyph="question" message="Altitude: 0m" />
		</div>);
	}
}
