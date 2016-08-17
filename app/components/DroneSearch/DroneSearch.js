import React, { Component } from 'react';
import styles from './DroneSearch.css';

export default class DroneSearch extends Component {
	render() {
		return (<div className={styles.error}>
			<div className={styles.center}>
				<div className={styles.ballOfLooksies} />
				<h2 className={styles.title}>Searching for drone</h2>
			</div>
		</div>);
	}
}
