import React, { Component, PropTypes } from 'react';
import SettingsModal from '../../components/SettingsModal';

export default class Settings extends Component {
	constructor(context, props) {
		super(context, props);

		this.closeIconClickHandler = this.closeIconClickHandler.bind(this);
	}

	closeIconClickHandler() {
		this.props.history.push('/');
	}

	render() {
		const { settings, updateKeyBindings } = this.props;
		return (<SettingsModal
			settings={settings}
			onUpdateKeyBindings={updateKeyBindings}
			onCloseIconClick={this.closeIconClickHandler} />);
	}
}

Settings.propTypes = {
	history: PropTypes.object.isRequired,
	settings: PropTypes.object.isRequired,
	updateKeyBindings: PropTypes.func.isRequired
};
