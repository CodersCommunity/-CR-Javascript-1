// IIFE is an antipattern in ES6: http://exploringjs.com/es6/ch_first-steps.html#_from-iifes-to-blocks.
{
	'use strict';

	// Every variable which value won't be changed, should be
	// declared as a constant
	// http://exploringjs.com/es6/ch_first-steps.html#_from-var-to-letconst
	const clockElement = document.getElementById( 'zegar' );
	const updateFrequency = 1000;

	// Function declarations inside blocks could be replaced by arrow functions.
	// http://exploringjs.com/es6/ch_first-steps.html#_from-function-expressions-to-arrow-functions
	const getDateAsText = () => {
		const now = new Date()
		const date = now.toLocaleDateString();
		const time = now.toLocaleTimeString();
		// If there's a substition in a string,
		// templates literals could be used.
		const result = `${date} | ${time}`;

		return result;
	}

	const updateClock = () => {
		clockElement.innerHTML = getDateAsText();
		
		setTimeout( updateClock, updateFrequency );
	}

	updateClock();
};
