import React from 'react';
import cn from 'classnames';
import styles from './InfoBarItem.css';

const classes = cn(
	styles.container,
	styles.spacer
);

const Spacer = () => <div className={classes} />;

export default Spacer;
