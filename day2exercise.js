// 
console.log("linked")


$(document).ready(function(){
	alert("ready")
	// $(“body”).fadeIn();
    $("button").click(function(){
        $("article").hide();
    });
});




// $("p").wiggle({
// 	speed: [speed of animation (ms); default: 50],
// 	wiggles: [number of times to wiggle; default: 3],
// 	travel: [number of pixels to move],
// 	callback: [function]
// });