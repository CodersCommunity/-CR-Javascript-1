(function () {
	'use strict';

	var clockElement = document.getElementById( 'zegar' );
	var updateFraquency = 1000;
	var formatter = new Intl.DateTimeFormat( 'pl' );

	function getDateAsText () {
		var now = new Date();
		var date = formatter.format( now );
		var time = now.toLocaleTimeString();

		var result = date + ' | ' + time;

		return result;
	};

	function updateClock () {
		clockElement.innerHTML = getDateAsText();

		setTimeout( updateClock, updateFraquency );
	};

	updateClock();
})();
