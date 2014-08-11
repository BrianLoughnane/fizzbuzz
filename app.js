$(document).ready(function() {

	var answer = prompt("Please enter a number to fizz buzz up to");

	$("#input")
	.fadeIn();

<<<<<<< HEAD
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

		// $("#holder").fadeIn("slow").delay(1600, function() {
		// 	checker();
		// });

		// $("#holder").fadeIn("slow", function() {
		// 	checker();
		// });
		
		$("#holder").fadeIn("slow", checker);
		


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
=======
>>>>>>> parent of e8c036a... Refactor using functions

	$("button")
	.fadeIn()
	.on("click", function() {
		var number = $("#input").val();
		var body = $("body");

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
		

	});


	$(document)
	.on("keydown", function(e) {
		if(e.which === 13) {
			$("button").click();
		}
	});


});
