$(document).ready(function() {

	var fizzBuzz = function(number) {

		$("#holder").fadeOut();
		$("#holder").empty();

		for(var i=1; i <= number; i++) {
			if((i%3===0)&&(i%5===0)){
				$("#holder").append("<div>fizz buzz</div>");
			} else if(i%3===0) {
				$("#holder").append("<div>fizz</div>");
			} else if(i%5===0) {
				$("#holder").append("<div>buzz</div>");
			} else {
				$("#holder").append("<div>"+i+"</div>");
			}
		}

		$("#holder").fadeIn("slow").delay(1600, function() {
			checker();
		});


	};	


	var checker = function() {
		var answer = prompt("Please enter a number to fizz buzz up to");
		answer = +answer;

		if(answer === NaN) {
			answer = prompt(answer + " is not a number.  Please enter a number.")
		} else if(answer % 1 !== 0) {
			answer = prompt(answer + " is a decimal.  Please enter a whole number.")
		} else if(answer < 1) {
			answer = prompt(answer + " is less than 1.  Please enter a number 1 or greater.")
		} else {
			fizzBuzz(answer);

		}
	};

	checker();







	// $("#input")
	// .fadeIn();


	// $("button")
	// .fadeIn()
	// .on("click", function() {
	// 	var number = $("#input").val();
	// 	var body = $("body");

	// 	$("#holder").fadeOut("slow", function() {

	// 		$("#holder").empty();

	// 		for(var i=1; i <= number; i++) {

	// 			if((i%3 === 0) && (i%5 === 0)){
	// 				$("#holder").append("<div>fizz buzz</div>");
	// 			} else if (i%3 === 0) {
	// 				$("#holder").append("<div>fizz</div>");	
	// 			} else if (i%5 === 0) {
	// 				$("#holder").append("<div>buzz</div>");
	// 			} else {
	// 				$("#holder").append("<div>" + i + "</div>");
	// 			}

	// 		}

	// 		$("#holder").fadeIn("slow");
		
	// 	});
		

	// });


	$(document)
	.on("keydown", function(e) {
		if(e.which === 13) {
			$("button").click();
		}
	});


});
