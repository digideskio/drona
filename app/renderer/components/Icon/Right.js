import React, { PropTypes, Component } from 'react';

export default class Right extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M37.983,36.812l11.139-11.139c0.201-0.202,0.326-0.48,0.326-0.788c0-0.308-0.125-0.585-0.326-0.788
				L37.983,12.958c-0.201-0.202-0.48-0.326-0.787-0.326c-0.617,0-1.114,0.499-1.114,1.113c0,0.308,0.124,0.586,0.325,0.788l9.238,9.237
				H1.551c-0.616,0-1.114,0.5-1.114,1.114c0,0.614,0.498,1.114,1.114,1.114h44.095l-9.238,9.237c-0.201,0.202-0.325,0.48-0.325,0.787
				c0,0.615,0.497,1.114,1.114,1.114C37.503,37.138,37.782,37.014,37.983,36.812"/>
		</svg>);
	}
}

Right.propTypes = {
	size: PropTypes.number.isRequired
};
