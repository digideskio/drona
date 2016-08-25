
import React, { PropTypes, Component } from 'react';

import Altitude from './Altitude';
import Camera from './Camera';
import Cross from './Cross';
import Cog from './Cog';
import Home from './Home';
import Info from './Info';
import Plane from './Plane';
import Question from './Question';
import Tick from './Tick';

const Icons = {
	altitude: Altitude,
	camera: Camera,
	cog: Cog,
	cross: Cross,
	home: Home,
	info: Info,
	plane: Plane,
	question: Question,
	tick: Tick
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
