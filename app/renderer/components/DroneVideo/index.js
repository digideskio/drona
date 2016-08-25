import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './DroneVideo.css';

export default class DroneVideo extends Component {
	// componentDidMount() {
	// 	new NodecopterStream(ReactDOM.findDOMNode(this));
	// }

	render() {
		return <img className={styles.video} src="http://localhost:8000" />;
		//return <div className={styles.video}></div>;
	}
}
