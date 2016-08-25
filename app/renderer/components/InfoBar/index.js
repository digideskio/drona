import React, { Component, PropTypes } from 'react';
import InfoBarItem from './InfoBarItem';

import styles from './InfoBar.css';

export default class InfoBar extends Component {
	render() {
		const { altitude } = this.props;

		return (<div className={styles.container}>
			<InfoBarItem glyph="altitude" primaryText={altitude || 0} secondaryText="m" />
			<InfoBarItem glyph="plane" primaryText={altitude || 0} secondaryText="km/h" />
		</div>);
	}
}

InfoBar.propTypes = {
	altitude: PropTypes.number.isRequired
};
