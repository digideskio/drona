import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styles from './DroneVideo.css';

export default class DroneVideo extends Component {
	componentDidMount() {
		new NodecopterStream(ReactDOM.findDOMNode(this));
	}

	render() {
		return (<div className={styles.video}></div>);
	}
}
