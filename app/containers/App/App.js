import React, { Component, PropTypes } from 'react';
import drone from '../../drone';
import { DroneError, DroneSearch } from '../../components';

import styles from './App.css';

export default class App extends Component {
	constructor(context, props) {
		super(context, props);

		this.state = {
			videoConnected: false,
			videoError: false
		};
	}
	componentWillMount() {
		this.video = drone.getVideoStream();
		this.video.on('data', this.onVideoData.bind(this));
		this.video.on('error', this.onVideoError.bind(this));
	}

	onVideoData(data) {
		this.setState({
			videoConnected: true,
			videoError: false
		});

		console.log('Video data', data);
	}

	onVideoError(err) {
		this.setState({
			videoConnected: false,
			videoError: true
		});

		console.log('Video error', err);
	}

	render() {
		const { videoConnected, videoError } = this.state;
		let innerComponent;

		if (videoError) {
			innerComponent = <DroneError />;
		} else {
			innerComponent = videoConnected ? 'C' : <DroneSearch />;
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

App.propTypes = {
	children: PropTypes.oneOf([PropTypes.element, PropTypes.array])
};

