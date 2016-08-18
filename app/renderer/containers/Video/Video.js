
import 'dronestream/dist/nodecopter-client.js';
import React, { Component, PropTypes } from 'react';
import DroneError from '../../components/DroneError';
import DroneSearch from '../../components/DroneSearch';
import DroneVideo from '../../components/DroneVideo';

import styles from './Video.css';

export default class Video extends Component {
	componentDidMount() {
		console.log('Requesting video');
		this.props.requestVideo();
	}

	componentWillReceiveProps(nextProps) {
		console.log('will receive', nextProps);
	}

	render() {
		const { error, video } = this.props;
		console.log('P', this.props.drone);
		let innerComponent;

		if (error) {
			innerComponent = <DroneError />;
		} else {
			innerComponent = video
				? <DroneVideo video={video} />
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

Video.propTypes = {
	requestVideo: PropTypes.func,
	error: PropTypes.object,
	video: PropTypes.bool
};
