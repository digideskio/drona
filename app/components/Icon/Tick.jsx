import React, { PropTypes, Component } from 'react';

export default class Temperature extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M49.391,9.415c0-0.613-0.498-1.111-1.111-1.111c-0.316,0-0.598,0.136-0.801,0.348l-0.002-0.003
				L18.271,38.934L2.408,23.071c-0.201-0.201-0.479-0.326-0.785-0.326c-0.613,0-1.111,0.498-1.111,1.111
				c0,0.307,0.124,0.584,0.326,0.785l16.663,16.665c0.201,0.201,0.479,0.324,0.785,0.324c0.317,0,0.598-0.135,0.799-0.346l0.005,0.002
				l29.995-31.104l-0.006-0.004C49.271,9.98,49.391,9.712,49.391,9.415"/>
		</svg>);
	}
}

Temperature.propTypes = {
	size: PropTypes.number.isRequired
};
