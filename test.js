
var timer = document.getElementById("timer");
var timeRemaining = 60;
var testPara = document.getElementById("testPara");
var textArea = document.getElementById("textArea");
var startWindow = document.getElementById("startWindow");
var startButton = document.getElementById("startButton");
var newTestWindow = document.getElementById("newTestWindow");
var newTestButton = document.getElementById("newTestButton");
var score = 0;


var calculateScore = function() {
	var paraSubmitted = textArea.value;
	var submittedWords = paraSubmitted.split(" ");
	var wordCount = submittedWords.length; 

	var testWords = testPara.innerHTML.split(" ");
	console.log(testWords);

	return wordCount;
};


var generatePassage = function(){
	
	paraContainer.style.display = "inline-block";
	textArea.style.display = "inline-block";
	var passages = [passage1, passage2, passage3, passage4, passage5];
	testPara.innerHTML = passages[Math.floor(Math.random()*10/2)];

};

var displayTime = function () {

	var getTime = setInterval(function() {
		timeRemaining--;
		timer.innerHTML = "Time Remaining: " + timeRemaining + "s"; 

		console.log(timeRemaining);

		if(timeRemaining == 0){

			clearInterval(getTime);
			
			var wrapper = document.getElementById("wrapper");
			wrapper.remove();

			timer.remove();

			document.body.appendChild(newTestWindow);
			document.getElementById("finalScore").innerHTML = "Your speed: " + calculateScore() + " words per minute.";
			newTestWindow.style.display = "block";
		} 
	}, 1000);

	textArea.removeEventListener("keydown", displayTime);
};

var test = function() {
	
	startWindow.style.display = "none";

	timer.innerHTML = "Time Remaining: 60s";
	timer.style.display = "block";

	textArea.addEventListener("keydown", displayTime);

	generatePassage();

};

startButton.addEventListener("click", test);

newTestButton.addEventListener("click", function(){
	window.location.reload();
});


var passage1 = "Near a naughty lawyer escapes the unchanged youth. Does our initiate foam cut the why? Why can't a screen leak without a forthcoming leadership? The approach pants in the pressure! The drill prices the collect correspondent. The dumped ideal bows.";

var passage2 = "Whatever link hopes in the magazine! The inflexible bump multiplies above my parent. The lager poses after a tear. How can his playground combat an alphabet? Should the bomb trace legitimize an appropriate secretary?";

var passage3 = "An overwhelmed pitfall mucks a grace after a far jam. A sound stirs below the ancient. How does the stake racket the optimistic glue? The wife staggers next to the bulb!";

var passage4 = "An overwhelmed pitfall mucks a grace after a far jam. A sound stirs below the ancient. How does the stake racket the optimistic glue? The wife staggers next to the bulb!";

var passage5 = "An overwhelmed pitfall mucks a grace after a far jam. A sound stirs below the ancient. How does the stake racket the optimistic glue? The wife staggers next to the bulb!";
