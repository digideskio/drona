import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import { Link } from 'react-router';
import Container from '../../components/Container';
import InfoBar from '../../components/InfoBar';
import Icon from '../../components/Icon';

import styles from './Dashboard.css';

export default class Dashboard extends Component {
	componentDidMount() {
		this.props.requestData();
	}

	render() {
		const { drone } = this.props;
		const settingsClasses = cn(styles.icon, styles.iconSettings);

		return (<Container>
			<InfoBar {...drone.demo} />
			<Link to="/settings">
				<Icon glyph="cog" className={settingsClasses} />
			</Link>
		</Container>);
	}
}

Dashboard.propTypes = {
	drone: PropTypes.object,
	requestData: PropTypes.func.isRequired
};
