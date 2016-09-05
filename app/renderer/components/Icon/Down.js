import React, { PropTypes, Component } from 'react';

export default class Down extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M13.016,37.926l11.139,11.139c0.202,0.201,0.48,0.326,0.788,0.326c0.308,0,0.585-0.125,0.788-0.326
				l11.139-11.139c0.202-0.201,0.326-0.48,0.326-0.787c0-0.617-0.499-1.114-1.113-1.114c-0.308,0-0.586,0.124-0.788,0.325l-9.237,9.238
				V1.493c0-0.616-0.5-1.114-1.114-1.114c-0.614,0-1.114,0.498-1.114,1.114v44.095l-9.237-9.238c-0.202-0.201-0.48-0.325-0.787-0.325
				c-0.615,0-1.114,0.497-1.114,1.114C12.689,37.445,12.813,37.725,13.016,37.926"/>
		</svg>);
	}
}

Down.propTypes = {
	size: PropTypes.number.isRequired
};
