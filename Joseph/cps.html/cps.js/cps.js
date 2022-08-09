$(document).ready(function () {
    score = 0;
    stop = 0;
    $("#test").html("Score: " + score + "<br>Average: 0<br>Start whenever you're ready.");
    $("counting").html("test");

        $("#test").html("Score: " + score + "<br>Average: " + average + " cps.<br>You have 60 seconds to click");
    $("#button").mousedown(function () {
        score = score + 1;
        average = score / 5;
        startTimer();
    });

    function startTimer() {
        if (stop === 0) {
            stop = stop + 1;
            var counter = 0;
            var interval = setInterval(function () {
                counter++;
                display = 60 - counter;
                $("#button").html("CLICK! (" + display + " secs)");
                if (counter == 60) {
                    alert("It's been 60 seconds, stop clicking now.");
                    clearInterval(interval);
                    stop = 0;
                    endscore = score;
                    score = 0;
                    $("#results").html("You clicked " + endscore + " times, in 5 seconds.<br>Your average click speed was " + average + " clicks per second.<br>Start clicking again to retry and get a better score!");
                    $("#button").html("CLICK! (60 secs)");
                }
            }, 1000);
        }
    }
});