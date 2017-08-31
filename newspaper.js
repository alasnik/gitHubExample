

$(document).ready(function(){
	alert("ready")
    $("button").click(function(){
        $("p").hide();
    });
});

$(“body”).fadeIn();



// $("p").wiggle({
// 	speed: [speed of animation (ms); default: 50],
// 	wiggles: [number of times to wiggle; default: 3],
// 	travel: [number of pixels to move],
// 	callback: [function]
// });