## Node Script Profiler
A simple node script profiler to give you an idea of how long your script takes, for "run once" kinds of things

## Current Version 0.1.0

## Platforms / Technologies
* [nodejs](http://nodejs.org/)

## Install
>       $ npm install script-profiler --save

## Usage
        // load into your NodeJS script
        var profiler = require('script-profiler');
        // start the profiler
        profiler.start();
        // run your manual script
        console.log('doing lots of stuff...');
        // stop the profiler on completion
        profiler.stop();