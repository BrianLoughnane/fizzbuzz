$(document).ready(function() {

	var answer = prompt("Please enter a number to fizz buzz up to");

	$("#input")
	.fadeIn();



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
