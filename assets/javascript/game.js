$(document).ready(function(){
console.log('ready');
var answer 
var i=0;
var correctAnswers=0;
var inorrectAnswers= 0;
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
		quest: "1. What is the day of the week",
		answera: 'Monday',
		answerb: 'Tuesday',
		answerc:'Wednesday',
		answerd: 'Friday',
		correct: 'Monday',
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
		answera: '16',
		answerb: '8',
		answerc: '4',
		answerd: '32',
		correct: '32'
	}
}
// console.log(questions.question1.quest)
// $(".questions").html(questions.question1.quest);
// $('.answerA').html(questions.question1.answera);
// $('.answerA').on('click',function(){
// 	$('.answerA').css('background','red');
// })
//Question array================================================
var qS=[questions.question1, questions.question2, questions.question3, questions.question4, questions.question5];

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

}

//Result of your choice====================================================
function resultAnswer(result, question){
	$('.questions').html(result+" the answer was "+ question);
	$('.answers').empty();
	run= setInterval(nextQuestion, 3000);

};
//Next Question==================================================
function nextQuestion(){
	i++;
	timer.time=10;
	timer.run();
	trivia(qS[i]);
	console.log(qS[i]);
	clearInterval(run);
}

//Play the game=================================================
$('button').on('click',function(){
	trivia(qS[i]);
	console.log(qS[i])
});

// Needs work

$('.answers').mouseover(function(){
	$(this).css('background','red')
})
.mouseout(function(){
	$(this).css('background','white')
})

//Game=========================================================

$('.answers').unbind().on('click','.answers',function(){
	//set choice and correct answer
	test = $(this).data('name');
	core = qS[i].correct;
	clearInterval(timer.counter);

	console.log(test);
	console.log(core);
	if(test===core){
		correctAnswers++;
		// i++;
		resultAnswer("Correct!",core);
		// nextQuestion();
	}
	else if(test != core){
		resultAnswer("Incorrect!!!", core);
	}
	if(timer.time === 0){
		resultAnswer("Times up!",core);
	}
})



})