import React, { PropTypes, Component } from 'react';

export default class Battery75 extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M47.167,20.593v-4.448c0-2.457-1.992-4.449-4.449-4.449H4.905c-2.457,0-4.449,1.992-4.449,4.449v17.793
				c0,2.457,1.992,4.449,4.449,4.449h37.813c2.457,0,4.449-1.992,4.449-4.449v-4.447c1.227,0,2.224-0.996,2.224-2.225v-4.449
				C49.391,21.589,48.394,20.593,47.167,20.593 M44.941,33.938c0,1.23-0.996,2.226-2.224,2.226H4.905c-1.228,0-2.224-0.995-2.224-2.226
				V16.145c0-1.228,0.996-2.225,2.224-2.225h37.813c1.228,0,2.224,0.997,2.224,2.225V33.938z M4.905,33.938H33.82V16.145H4.905V33.938z
				"/>
		</svg>);
	}
}

Battery75.propTypes = {
	size: PropTypes.number.isRequired
};
