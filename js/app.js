
$(document).ready(function() {
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var count_num = 0;
  	var guess = 0;
  	var rand_num = null;
  	var distance_num = 0;
  	randomNumber();

  	function randomNumber() {
  		rand_num = Math.floor(Math.random() * 100) + 1;
  	}

  	function resetGame() {
  		count_num = 0;
  		guess = 0;
  		$("#count").html(count_num);
  		$('ul#guessList li').remove();
  		$("input#userGuess").val('');
  		$("#feedback").html("Make your Guess!");
  		$("#guessButton").prop("disabled", false);
  		$("#userGuess").prop("disabled", false);
  	}

  	function newGame() {
  		resetGame();
  		randomNumber();
  	}

  	$(".new").click(function() {
  		newGame();
  	});

  	function distanceNumber (distance_num) {
		if ((guess > 100) || (guess < 1)) {
			$("#feedback").html("Pick a number between 1 and 100");
		}
		else if (distance_num >= 50) {
			$("#feedback").html("you are ice cold...");
		} 
		else if ((distance_num >= 40) && (distance_num < 50)) {
			$("#feedback").html("you are cold...");
		} 
		else if ((distance_num >= 30) && (distance_num < 40)) {
			$("#feedback").html("you are warm...");
		} 
		else if ((distance_num >= 20) && (distance_num < 30)) {
			$("#feedback").html("you are hot...");
		} 
		else if ((distance_num >= 10) && (distance_num < 20)) {
			$("#feedback").html("you are very hot...");
		}
		else if ((distance_num >= 1) && (distance_num < 10)) {
			$("#feedback").html("you are sizzling...");
		}
		else if (distance_num == 0) {
			$("#feedback").html("You Win!");
			$( "#guessButton" ).prop("disabled", true);
			$( "#userGuess" ).prop("disabled", true);
		}
	}
  		
  	$("input#guessButton").click(function() {
  		guess = $('input#userGuess').val();
  		guess = parseInt(guess);
  		if (isNaN(guess)) {
  			return true;
  		}
  		count_num++;
  		$("#count").html(count_num);
  		$('ul#guessList').append("<li>" + guess + "</li>");
  		distance_num = Math.abs(rand_num - guess);
  		distanceNumber(distance_num);
		$("input#userGuess").val('');
  	});
});
