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
		const { error, video } = this.props;
		console.log('P', this.props);
		let innerComponent;

		if (error) {
			innerComponent = <DroneError />;
		} else {
			innerComponent = video
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
	error: PropTypes.object,
	video: PropTypes.bool
};
