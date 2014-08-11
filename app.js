$(document).ready(function() {

	// var fizzBuzz = function(number) {

	// 	$("#holder").fadeOut("slow");
	// 	$("#holder").empty();

	// 	for(var i=1; i <= number; i++) {
	// 		if((i%3===0)&&(i%5===0)){
	// 			$("#holder").append("<div>fizz buzz</div>");
	// 		} else if(i%3===0) {
	// 			$("#holder").append("<div>fizz</div>");
	// 		} else if(i%5===0) {
	// 			$("#holder").append("<div>buzz</div>");
	// 		} else {
	// 			$("#holder").append("<div>"+i+"</div>");
	// 		}
	// 	}


	// 	$("#holder").fadeIn("slow", checker);
		


	// };	


	// var checker = function() {
	// 	var answer = $("#input").val();
	// 	answer = +answer;

	// 	if(answer === NaN) {
	// 		answer = alert(answer + " is not a number.  Please enter a number.")
	// 	} else if(answer % 1 !== 0) {
	// 		answer = alert(answer + " is a decimal.  Please enter a whole number.")
	// 	} else if(answer < 1) {
	// 		answer = alert(answer + " is less than 1.  Please enter a number 1 or greater.")
	// 	} else {
	// 		fizzBuzz(answer);

	// 	}
	// };

	// checker();




	// Old version




	var fizzbuzz = function() {
		var number = $("#input").val();

		$("#holder").fadeOut("slow", function() {

			$("#holder").empty();

			for(var i=1; i <= number; i++) {

				if((i%3 === 0) && (i%5 === 0)){
					$("#holder").append("<div>fizz buzz</div>");
				} else if (i%3 === 0) {
					$("#holder").append("<div>fizz</div>");	
				} else if (i%5 === 0) {
					$("#holder").append("<div>buzz</div>");
				} else {
					$("#holder").append("<div>" + i + "</div>");
				}

			}

			$("#holder").fadeIn("slow");
		
		});
		

	};
	


	var checker = function() {
		var answer = $("#input").val();
		// answer = +answer;

		if(isNaN(answer)) {
			answer = alert(answer + " is not a number.  Please enter a number.")
		} else if(answer % 1 !== 0) {
			answer = alert(answer + " is a decimal.  Please enter a whole number.")
		} else if(answer < 1) {
			answer = alert(answer + " is less than 1.  Please enter a number 1 or greater.")
		} else {
			fizzbuzz(answer);

		}
	};


	$("#input")
	.fadeIn();


	$("button")
	.fadeIn()
	.on("click", checker);


	$(document)
	.on("keydown", function(e) {
		if(e.which === 13) {
			$("button").click();
		}
	});


});
