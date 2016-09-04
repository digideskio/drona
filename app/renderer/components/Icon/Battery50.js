import React, { PropTypes, Component } from 'react';

export default class Battery50 extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M4.771,34.002h20.114V16.124H4.771V34.002z M47.232,20.593v-4.47c0-2.468-2.001-4.47-4.47-4.47H4.771
				c-2.468,0-4.469,2.001-4.469,4.47v17.878c0,2.47,2.001,4.47,4.469,4.47h37.992c2.469,0,4.47-2,4.47-4.47v-4.469
				c1.234,0,2.235-1,2.235-2.235v-4.47C49.468,21.595,48.467,20.593,47.232,20.593 M44.998,34.002c0,1.235-1.001,2.234-2.235,2.234
				H4.771c-1.232,0-2.234-0.999-2.234-2.234V16.124c0-1.233,1.002-2.235,2.234-2.235h37.992c1.234,0,2.235,1.002,2.235,2.235V34.002z"
				/>
		</svg>);
	}
}

Battery50.propTypes = {
	size: PropTypes.number.isRequired
};
