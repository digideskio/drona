import 'dronestream/dist/nodecopter-client.js';
import React, { Component, PropTypes } from 'react';
import DroneError from '../../components/DroneError';
import DroneSearch from '../../components/DroneSearch';
import DroneVideo from '../../components/DroneVideo';

import styles from './Background.css';

export default class Background extends Component {
	componentDidMount() {
		this.props.requestVideo();
	}

	render() {
		const { video } = this.props;
		let innerComponent;

		if (video.error) {
			innerComponent = <DroneError />;
		} else {
			innerComponent = video.connected
				? <DroneVideo />
				: <DroneSearch />;
		}

		return (<div>
			<div className={styles.inner}>
				{innerComponent}
			</div>
			<div className={styles.inner}>
				{this.props.children}
			</div>
		</div>);
	}
}

Background.propTypes = {
	requestVideo: PropTypes.func,
	video: PropTypes.object
};
