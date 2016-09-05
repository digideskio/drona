import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';

import styles from './KeyBinding.css';

export default class KeyBinding extends Component {
	constructor(context, props) {
		super(context, props);

		this.inputChangeHandler = this.inputChangeHandler.bind(this);
	}

	inputChangeHandler(event) {
		console.log(event);
	}

	render() {
		const { label, value } = this.props;

		return (<div className={styles.container}>
			<Icon className={styles.icon} customSize={20} />
			<label className={styles.label}>{label}</label>
			<input className={styles.input} type="text" value={value} onKeyUp={this.inputChangeHandler} />
		</div>);
	}
}

KeyBinding.propTypes = {
	label: PropTypes.string.isRequired,
	settingsKey: PropTypes.string.isRequired,
	value: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	onChange: PropTypes.string.isRequired
};
