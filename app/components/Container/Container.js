import React, { PropTypes, Component } from 'react';
import styles from './Container.css';

export default class Container extends Component {
	render() {
		return (<div className={styles.container}>
			{this.props.children}
		</div>);
	}
}

Container.propTypes = {
	children: PropTypes.element.isRequired
};
