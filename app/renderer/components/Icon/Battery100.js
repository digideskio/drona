import React, { PropTypes, Component } from 'react';

export default class Battery100 extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M47.38,20.537v-4.484c0-2.476-2.007-4.483-4.483-4.483H4.785c-2.476,0-4.483,2.007-4.483,4.483v17.935
				c0,2.477,2.008,4.483,4.483,4.483h38.112c2.477,0,4.483-2.007,4.483-4.483v-4.482c1.237,0,2.242-1.004,2.242-2.243v-4.484
				C49.622,21.542,48.617,20.537,47.38,20.537 M45.139,33.988c0,1.239-1.006,2.242-2.242,2.242H4.785c-1.237,0-2.242-1.003-2.242-2.242
				V16.053c0-1.237,1.004-2.242,2.242-2.242h38.112c1.236,0,2.242,1.004,2.242,2.242V33.988z M4.785,33.988h38.112V16.053H4.785V33.988
				z"/>
		</svg>);
	}
}

Battery100.propTypes = {
	size: PropTypes.number.isRequired
};
