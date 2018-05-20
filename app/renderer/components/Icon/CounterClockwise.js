import React, { PropTypes, Component } from 'react';

export default class CounterClockwise extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M1.49,23.733c-0.614,0-1.112,0.499-1.112,1.112c0,13.514,10.954,24.468,24.468,24.468
				c7.627,0,14.422-3.502,18.906-8.973v7.86c0,0.615,0.499,1.112,1.112,1.112c0.614,0,1.112-0.497,1.112-1.112V37.08
				c0-0.614-0.498-1.112-1.112-1.112H33.742c-0.613,0-1.111,0.498-1.111,1.112c0,0.615,0.498,1.112,1.111,1.112h8.891
				c-4.058,5.4-10.512,8.896-17.787,8.896c-12.285,0-22.243-9.958-22.243-22.243C2.603,24.232,2.104,23.733,1.49,23.733 M24.846,2.603
				c12.284,0,22.243,9.96,22.243,22.243c0,0.615,0.499,1.113,1.112,1.113s1.111-0.498,1.111-1.113
				c0-13.512-10.955-24.467-24.467-24.467c-7.627,0-14.423,3.502-18.907,8.976V1.491c0-0.614-0.498-1.112-1.112-1.112
				c-0.613,0-1.111,0.499-1.111,1.112v11.121c0,0.616,0.498,1.112,1.111,1.112h11.122c0.613,0,1.112-0.497,1.112-1.112
				c0-0.613-0.499-1.112-1.112-1.112H7.057C11.116,6.101,17.569,2.603,24.846,2.603"/>
		</svg>);
	}
}

CounterClockwise.propTypes = {
	size: PropTypes.number.isRequired
};