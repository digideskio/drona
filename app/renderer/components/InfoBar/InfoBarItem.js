import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';

import styles from './InfoBarItem.css';

export default class InfoBarItem extends Component {
	render() {
		const { glyph, primaryText, secondaryText } = this.props;

		const secondaryTextEl = secondaryText
			? <span className={styles.secondary}>{secondaryText}</span>
			: null;

		return (<div className={styles.container}>
			<Icon customSize={20} className={styles.icon} glyph={glyph} />
			<p className={styles.primary}>{primaryText}{secondaryTextEl}</p>
		</div>);
	}
}

InfoBarItem.propTypes = {
	glyph: PropTypes.string.isRequired,
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string.isRequired
};
