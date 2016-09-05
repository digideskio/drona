import React, { PropTypes, Component } from 'react';

export default class Up extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M36.869,11.844L25.73,0.705c-0.202-0.201-0.48-0.327-0.788-0.327c-0.308,0-0.585,0.125-0.788,0.327
				L13.016,11.844c-0.202,0.201-0.327,0.48-0.327,0.788c0,0.616,0.5,1.114,1.114,1.114c0.307,0,0.586-0.124,0.788-0.326l9.238-9.238
				v44.095c0,0.616,0.499,1.114,1.114,1.114c0.614,0,1.114-0.498,1.114-1.114V4.182l9.237,9.238c0.202,0.202,0.48,0.326,0.787,0.326
				c0.615,0,1.114-0.498,1.114-1.114C37.195,12.324,37.071,12.045,36.869,11.844"/>
		</svg>);
	}
}

Up.propTypes = {
	size: PropTypes.number.isRequired
};
