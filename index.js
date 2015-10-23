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
    hours = parseInt(minutes = parseInt(seconds = parseInt(milliseconds / 1000)) / 60) / 60;
    return (hours % 60) +
        ':' + parseInt(minutes % 60) +
        ':' +  parseInt(seconds % 60) +
        ((milliseconds === 0) ? '' : '.' + (milliseconds % 1000));
}

module.exports = {
    start: start,
    stop: stop
};