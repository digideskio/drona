import React, { PropTypes, Component } from 'react';

export default class Left extends Component {
	render() {
		const size = this.props.size;

		return (<svg version="1.1" width={size} height={size} x="0px" y="0px" viewBox={`0 0 50 50`} >
			<path d="M11.901,12.958L0.763,24.097c-0.201,0.202-0.326,0.48-0.326,0.788c0,0.308,0.125,0.585,0.326,0.788
				l11.139,11.139c0.201,0.202,0.48,0.326,0.787,0.326c0.617,0,1.114-0.499,1.114-1.113c0-0.308-0.124-0.586-0.325-0.788l-9.238-9.237
				h44.095c0.616,0,1.114-0.5,1.114-1.114c0-0.614-0.498-1.114-1.114-1.114H4.239l9.238-9.237c0.201-0.202,0.325-0.48,0.325-0.787
				c0-0.615-0.497-1.114-1.114-1.114C12.382,12.632,12.103,12.756,11.901,12.958"/>
		</svg>);
	}
}

Left.propTypes = {
	size: PropTypes.number.isRequired
};
