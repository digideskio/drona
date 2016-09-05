
import React, { PropTypes, Component } from 'react';

import Altitude from './Altitude';
import Battery0 from './Battery0';
import Battery25 from './Battery25';
import Battery50 from './Battery50';
import Battery75 from './Battery75';
import Battery100 from './Battery100';
import Camera from './Camera';
import Clockwise from './Clockwise';
import Cross from './Cross';
import Cog from './Cog';
import CounterClockwise from './CounterClockwise';
import Down from './Down';
import DownRound from './DownRound';
import DownSquare from './DownSquare';
import Hold from './Hold';
import Home from './Home';
import Info from './Info';
import Left from './Left';
import Plane from './Plane';
import Question from './Question';
import Right from './Right';
import Tick from './Tick';
import Up from './Up';
import UpRound from './UpRound';
import UpSquare from './UpSquare';

const Icons = {
	altitude: Altitude,
	battery0: Battery0,
	battery25: Battery25,
	battery50: Battery50,
	battery75: Battery75,
	battery100: Battery100,
	camera: Camera,
	clockwise: Clockwise,
	cog: Cog,
	cross: Cross,
	counterClockwise: CounterClockwise,
	down: Down,
	downRound: DownRound,
	downSquare: DownSquare,
	hold: Hold,
	home: Home,
	info: Info,
	left: Left,
	plane: Plane,
	question: Question,
	right: Right,
	tick: Tick,
	up: Up,
	upRound: UpRound,
	upSquare: UpSquare
};

const sizes = {
	small: '10px',
	medium: '25px',
	large: '50px'
};

export default class Icon extends Component {
	/**
	 * Returns a React element which will render an SVG depending on the `glyph` value
	 * that gets passed through to an Icon element in it's props.
	 */
	getGlyph() {
		const { glyph, customSize, size } = this.props;

		let glyphSize;
		if (customSize && typeof customSize === 'number') {
			glyphSize = customSize;
		} else {
			// Check that we both have a size and it is value. Else default to medium
			glyphSize = size && sizes[size] || sizes.medium;
		}

		const Element = glyph ? Icons[glyph] : Question;
		return <Element size={glyphSize} />;
	}

	render() {
		const props = this.props;

		return <span onClick={props.onClick} className={props.className}>{this.getGlyph()}</span>;
	}
}

Icon.propTypes = {
	className: PropTypes.string,

	/**
	 * @property {string} glyph The glyph that you want for this icon. Will default to `question`
	 * if nothing is supplied
	 */
	glyph: PropTypes.oneOf(Object.keys(Icons)),

	/**
	 * @property {string} size How large or small you want this icon to be. Can be `small`,
	 * `medium`, or `large`
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),

	/**
	 * @property {number} customSize Adding in a customSize overrides the side options
	 */
	customSize: PropTypes.number,

	/**
	 * @property {function} onClick Function to call when the icon is clicked
	 */
	onClick: PropTypes.func
};
