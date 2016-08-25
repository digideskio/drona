import React, { Component, PropTypes } from 'react';
import Info from '../Info';

import styles from './InfoList.css';

export default class InfoList extends Component {
	render() {
		const props = this.props;
		const altitude = props.altitude || 0;

		return (<div className={styles.container}>
			<Info glyph="question" message={`Altitude: ${altitude.toFixed(1)}m`} />
		</div>);
	}
}

InfoList.propTypes = {
	altitude: PropTypes.number.isRequired
};
