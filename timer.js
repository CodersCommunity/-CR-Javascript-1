(function() {
	'use strict';

	var CLOCK_ELEMENT = document.getElementById('zegar');
	var UPDATE_FRAQUENCY = 1000;
	var FORMATTER = new Intl.DateTimeFormat('pl');

	function getDateAsText() {
		var now = new Date();
		var date = FORMATTER.format(new Date());
		var time = now.toLocaleTimeString();

		var result = date + ' | ' + time;

		return result;
	};

	function updateClock() {
		CLOCK_ELEMENT.innerHTML = getDateAsText();

		setTimeout(updateClock, UPDATE_FRAQUENCY);
	};

	updateClock();
})();
