import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import InfoBarItem from '.';

import styles from './InfoBarItem.css';

export default class Battery extends Component {
	getBatteryGlyph() {
		const { batteryPercentage } = this.props;

		if (batteryPercentage > 90) {
			return 'battery100';
		} else if (batteryPercentage > 60) {
			return 'battery75';
		} else if (batteryPercentage > 40) {
			return 'battery50';
		} else if (batteryPercentage > 15) {
			return 'battery25';
		}

		return 'battery0';
	}

	render() {
		const iconGlyph = this.getBatteryGlyph();
		const iconClasses = cn(
			styles.battery,
			iconGlyph === 'battery0' ? styles.batteryLow : styles.batteryOk
		);

		return (<InfoBarItem
			iconClassName={iconClasses}
			glyph={iconGlyph}
			primaryText={this.props.batteryPercentage || 0}
			secondaryText="%" />);
	}
}

Battery.propTypes = {
	batteryPercentage: PropTypes.number.isRequired
};
