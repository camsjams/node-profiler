var startTime;

function start() {
	startTime = new Date().getTime();
}

function stop() {
	var endTime = new Date().getTime(),
		diff = (endTime - startTime);
	console.log('\nTime taken: ' + format(diff) + '\n');
}

function format(milliseconds) {
	var hours, minutes, seconds;
	hours = ~~(minutes = ~~(seconds = ~~(milliseconds / 1000)) / 60) / 60;
	return pad(hours) + ':' +
			pad(minutes) + ':' +
			pad(seconds) +
			((milliseconds === 0) ? '' : '.' + (milliseconds % 1000));
}

function pad(timeVal) {
	timeVal = ~~(timeVal % 60);
	return timeVal < 10 ? '0' + timeVal : timeVal;
}

module.exports = {
	start: start,
	stop: stop
};
