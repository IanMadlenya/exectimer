var t = require("./index");

function calculate(num){

    var m = 25,
        // a - 1 should be divisible by m's prime factors
        a = 11,
        // c and m should be co-prime
        c = 17;
    // Setting the seed
    var z = 3;
    var rand = function() {
        // define the recurrence relationship
        z = (a * z + c) % m;
        // return an integer
        // Could return a float in (0, 1) by dividing by m
        return z;
    };

    for(i = 0; i < num; i++) {
        var tick = new t.Tick("calc");
        tick.start();
        rand();
        tick.stop();
    }

    var timer = t.timers.calc;

    console.log("Calculated pi with an accuracy of 9999999 in " + timer.duration()/1000 + "ms\n"
        + "Times per calculation:\n"
        + " average: " + timer.mean() + "ns\n"
        + " median: " + timer.median() + "ns\n"
        + " min: " + timer.min() + "ns\n"
        + " max: " + timer.max() + "ns\n"
        + " count: " + timer.count() + "\n"
        + " start: " + timer.start() + "\n"
        + " end: " + timer.end())
}

calculate(99);