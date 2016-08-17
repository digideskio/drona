
import React, { Component, PropTypes } from 'react';import drone from '../../drone';
import { DroneError, DroneSearch, DroneVideo } from '../../components';

import styles from './App.css';

export default class App extends Component {
	constructor(context, props) {
		super(context, props);

		this.state = {
			videoConnected: false,
			videoError: false,
			video: null
		};
	}
	componentWillMount() {
		// this.video = drone.getPngStream();
		// this.video.on('data', this.onVideoData.bind(this));
		// this.video.on('error', this.onVideoError.bind(this));
	}

	onVideoData(data) {
		console.log('VIDEO DATA', data);
		// fs.writeFile('temp/frame.png', data, (err) => {
		// 	if (err) {
		// 		console.log('Error saving frame', err);
		// 	}
		// 	this.setState({
		// 		videoConnected: true,
		// 		videoError: false,
		// 		video: // Something
		// 	});
		// });
	}

	onVideoError(err) {
		this.setState({
			videoConnected: false,
			videoError: true,
			video: null
		});

		console.log('Video error', err);
	}

	render() {
		const { video, videoConnected, videoError } = this.state;
		let innerComponent;

		if (videoError) {
			innerComponent = <DroneError />;
		} else {
			innerComponent = videoConnected
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

