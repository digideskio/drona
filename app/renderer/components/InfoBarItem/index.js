import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import Icon from '../Icon';

import styles from './InfoBarItem.css';

export default class InfoBarItem extends Component {
	render() {
		const { className, primaryClassName, secondaryClassName, iconClassName, glyph, primaryText, secondaryText } = this.props;
		const classes = cn(
			styles.container,
			className
		);
		const primaryClasses = cn(
			styles.primary,
			primaryClassName
		);
		const secondaryClasses = cn(
			styles.secondary,
			secondaryClassName
		);
		const iconClasses = cn(
			styles.icon,
			iconClassName
		);
		const secondaryTextEl = secondaryText
			? <span className={secondaryClasses}>{secondaryText}</span>
			: null;

		return (<div className={classes}>
			<Icon customSize={20} className={iconClasses} glyph={glyph} />
			<p className={primaryClasses}>{primaryText}{secondaryTextEl}</p>
		</div>);
	}
}

InfoBarItem.propTypes = {
	className: PropTypes.string,
	primaryClassName: PropTypes.string,
	secondaryClassName: PropTypes.string,
	iconClassName: PropTypes.string,
	glyph: PropTypes.string.isRequired,
	primaryText: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]).isRequired,
	secondaryText: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]).isRequired
};
