import React, { Component, PropTypes } from 'react';
import InfoBarItem from '../InfoBarItem';
import InfoBarItemSpacer from '../InfoBarItem/Spacer';
import InfoBarItemBattery from '../InfoBarItem/Battery';

import styles from './InfoBar.css';

export default class InfoBar extends Component {
	render() {
		const { altitude, batteryPercentage } = this.props;

		return (<div className={styles.container}>
			<InfoBarItem glyph="altitude" primaryText={altitude || 0} secondaryText="m" />
			<InfoBarItem glyph="plane" primaryText="..." secondaryText="km/h" />
			<InfoBarItemSpacer />
			<InfoBarItemBattery batteryPercentage={batteryPercentage} />
		</div>);
	}
}

InfoBar.propTypes = {
	altitude: PropTypes.number.isRequired,
	batteryPercentage: PropTypes.number.isRequired,
	velocity: PropTypes.object.isRequired
};
