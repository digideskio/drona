import React, { Component, PropTypes } from 'react';
import styles from './DroneVideo.css';

export default class DroneVideo extends Component {
	render() {
		return (<div className={styles.video}>
			<h1>Showing video</h1>
		</div>);
	}
}

DroneVideo.propTypes = {
	video: PropTypes.array
};
