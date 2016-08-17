import React, { Component } from 'react';
import Loader from './Loader/Loader';
import styles from './DroneError.css';

export default class DroneError extends Component {
	render() {
		return (<div className={styles.error}>
			<div className={styles.center}>
				<div className={styles.ballOfRage}>
					<Loader />
				</div>
				<h2 className={styles.title}>Error trying to connect</h2>
			</div>
		</div>);
	}
}
