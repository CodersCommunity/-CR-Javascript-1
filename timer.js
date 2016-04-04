(function() {
	'use strict';

	var clockElement = document.querySelector('#zegar')
		, UPDATE_FRAQUENCY_IN_MS = 1000
	;

	function getDateAsText() {
		var now = new Date()
			, date = now.toLocaleDateString()
			, time = now.toLocaleTimeString()
			, result = date + ' | ' + time;
		;

		return result;
	};

	function updateClock() {
		clockElement.innerHTML = getDateAsText();
		
		setTimeout(updateClock, UPDATE_FRAQUENCY_IN_MS);
	};

	updateClock();
})();
