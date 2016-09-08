$(document).ready(function(){
console.log('ready');
var answer 
var core
var i=0;
var correctAnswers=0;
var incorrectAnswers= 0;
var unAnswered =0;
//Timer=========================================================================
var timer={
	time:10,

	run:function(){
		counter = setInterval(timer.decrement, 1000);
	},

	decrement: function(){
		timer.time--;

		$('#timer').html(timer.time);
		if(timer.time === 0){
		resultAnswer("Times up!",core);
		};
	},

}//end timer
// timer.run();
//Questions===================================================================
	var questions={
	question1:{
		quest: "1. What is the first day of the week",
		answera: 'Sunday',
		answerb: 'Tuesday',
		answerc:'Wednesday',
		answerd: 'Friday',
		correct: 'Sunday',
	},
	question2:{
		quest: '2) Triton is a moon of which planet?',
		answera:'Uranus',
		answerb: 'Neptune',
		answerc: 'Saturn',
		answerd: 'Earth',
		correct: 'Neptune'
	},
	question3:{
		quest: '3)Vermillion is a shade of which colour:',
		answera: 'Red',
		answerb: 'Blue',
		answerc: 'Green',
		answerd: 'Yellow',
		correct: 'Red'
	},
	question4:{
		quest:"4)In anatomy, 'plantar' relates to which part of the human body:",
		answera: 'Stomach',
		answerb: 'Foot',
		answerc: 'Stomach',
		answerd: 'Hand',
		correct: 'Foot'
	},
	question5:{
		quest:"5)How many soup cans are featured in Andy Warhol's famous 1962 painting,'Campbell's Soup Cans'?",
		answera: 'Sixteen',
		answerb: 'Eight',
		answerc: 'Four',
		answerd: 'Thirty-Two',
		correct: 'Thirty-Two'
	},
	question6:{
		quest: "6)In the 1991 film Reservoir Dogs, Michael Madson played which character?",
		answera: "Mr. Blonde",
		answerb: "Mr. Orange",
		answerc: "Mr. Brown",
		answerd: "Mr. Pink",
		correct: "Mr. Blonde"
	}
};

//Question array================================================
var qS=[questions.question1, questions.question2, questions.question3, questions.question4, questions.question5, questions.question6, 'end'];

//Loading questinos===========================================

var trivia = function(question){
	var askQuestion = $(".questions").html(question.quest);
	var askAnswer1 = $("<div class='answers answerA' data-name='"+question.answera+"'>"+question.answera+"</div>");
	var askAnswer2 = $("<div class='answers answerB' data-name='"+question.answerb+"'>"+question.answerb+"</div>");
	var askAnswer3 = $("<div class='answers answerC' data-name='"+question.answerc+"'>"+question.answerc+"</div>");
	var askAnswer4 = $("<div class='answers answerD' data-name='"+question.answerd+"'>"+question.answerd+"</div>");
	$('.answerA').html(askAnswer1)
	$('.answerB').html(askAnswer2)
	$('.answerC').html(askAnswer3)
	$('.answerD').html(askAnswer4)
	core = question.correct;

}

//Result of your choice====================================================
function resultAnswer(result, question){
	$('.questions').html(result+" the answer was "+ question);
	$('.answers').empty();
	run= setInterval(nextQuestion, 3000);
	clearInterval(counter);

};
//Next Question==================================================
function nextQuestion(){
	i++;
	timer.time=11;
	timer.run();
	trivia(qS[i]);
	console.log(qS[i]);
	clearInterval(run);
		if(qS[i]==='end'){
			endGame();
		};
};
//End Game===================================================
function endGame(){
	$('.game').html("<button class='game'> New Game </button>");
	$('.questions').empty();
	$('.answerD').empty();
	$('.answerA').html("Correct answers: "+correctAnswers);
	$('.answerB').html("Incorrect answers: "+incorrectAnswers);
	$('.answerC').html("Un-Answered questions: "+unAnswered);
	clearInterval(counter)
	newGame();


}
//New Game====================================================
function newGame(){
	i=0;
	console.log(qS[i]);
	incorrectAnswers= 0;
	correctAnswers=0;
};

//Play the game=================================================
$('.game').on('click',function(){
	$(this).empty();
	newGame();
	trivia(qS[i]);
	timer.run();
});


// Highlight were mouse goesk==================================================

$('.answers').bind().mouseover(function(){
	$(this).css('background','white')
})
.mouseout(function(){
	$(this).css('background','pink')
});

//Game=========================================================

$('.answers').on('click','.answers',function(){ //did have an unbind here but seems to work without it
	//set choice and correct answer
	trivia(qS[i]);
	test = $(this).data('name');
	core = qS[i].correct;
	clearInterval(timer.counter);

	console.log(test);
	console.log(core);
	//record correct answer
	if(test===core){
		correctAnswers++;
		resultAnswer("Correct!",core);
		console.log(i+"here");
	}//record wrong answer

	else if(test != core){
		resultAnswer("Incorrect!!!", core);
		incorrectAnswers++;
		console.log(i+"here");
	}//record no answer

});//end click

	//Times up
	if(timer.time === 0){
		resultAnswer("Times up!",qS[i].core);
		unAnswered++;
	};



});