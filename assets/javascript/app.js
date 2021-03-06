//variable to hold all of the questions and their answer options
var questions = [
    {
        number: "1",
        question: "On his first date with Robin, what instrument did Ted steal from the restaurant?",
        answers: [
            "Kazoo",
            "Clarinet",
            "French Horn",
            "Triangle"
        ],
        correctAnswer: "French Horn"
    },
    {
        number: "2",
        question: "What does GNB stand for?",
        answers: [
            "Global Networking Brand",
            "Greenway National Bank",
            "Goliath National Bank",
            "Grant Nutritional Brand",
        ],
        correctAnswer: "Goliath National Bank"
    },
    {
        number: "3",
        question: "Who did Ted not date?",
        answers: [
            "Zoey",
            "Victoria",
            "Stella",
            "Nora",
        ],
        correctAnswer: "Nora"
    },
    {
        number: "4",
        question: "Who is Robin's work enemy?",
        answers: [
            "Nora",
            "Patrice",
            "Stella",
            "Abby",
        ],
        correctAnswer: "Patrice"
    },
    {
        number: "5",
        question: "How many slaps were awarded by Lily to Marshall during the Marshall-Barney Slap Bet?",
        answers: [
            "2",
            "5",
            "7",
            "10",
        ],
        correctAnswer: "5"
    },
]

var timer;
var correctAnswerTotal = 0;
var incorrectAnswerTotal = 0;
var questionDisplayed = 0;
var answerSelection;
var correctAnswer;
var interval;


function pullQuestion () {
    $("#questionNumber").html("Question number " + questions[questionDisplayed].number + " of 5");
    $("#question").html(questions[questionDisplayed].question);
    $("#answerA").html("A: " + questions[questionDisplayed].answers[0]);
    $("#answerB").html("B: " + questions[questionDisplayed].answers[1]);
    $("#answerC").html("C: " + questions[questionDisplayed].answers[2]);
    $("#answerD").html("D: " + questions[questionDisplayed].answers[3]);
}

//Countdown for seconds remaining for question
function timerInterval() {
    interval = 10;
    
    timer = setInterval (function(){
       $("#timer").html("Time Left: " + interval);
       interval--;

       if (interval === 0) {
           clearInterval(timer);
           $("#timer").html("Time is up. The correct answer was " + questions[questionDisplayed].correctAnswer + ".");
           incorrectAnswerTotal++;
           $("#incorrect").html(incorrectAnswerTotal);
           setTimeout(function(){
            questionDisplayed++;
            pullQuestion ();
        }, 3000);
       }
    }, 1000);
}


$(document).ready(function(){

    // Starts the game running
    $("#question").click(function () {
        interval = 0;
        pullQuestion();
        timerInterval();
    });

    //Checks to see if selected answer matches correct answer
    $("#answerA").click(function(){
        clearInterval(timer);
        if (questions[questionDisplayed].answers[0] === questions[questionDisplayed].correctAnswer) {
            correctAnswerTotal++;
            $("#correct").html(correctAnswerTotal);
            $("#timer").html("Correct, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        else {
            incorrectAnswerTotal++;
            $("#incorrect").html(incorrectAnswerTotal);
            $("#timer").html("Incorrect, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        setTimeout(function(){
            questionDisplayed++;
            pullQuestion ();
            timerInterval ();
        }, 3000);
    })

    $("#answerB").click(function(){
        clearInterval(timer);
        if (questions[questionDisplayed].answers[1] === questions[questionDisplayed].correctAnswer) {
            correctAnswerTotal++;
            $("#correct").html(correctAnswerTotal);
            $("#timer").html("Correct, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        else {
            incorrectAnswerTotal++;
            $("#incorrect").html(incorrectAnswerTotal);
            $("#timer").html("Incorrect, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        setTimeout(function(){
            questionDisplayed++;
            pullQuestion ();
            timerInterval ();
        }, 3000);
    })

    $("#answerC").click(function(){
        clearInterval(timer);
        if (questions[questionDisplayed].answers[2] === questions[questionDisplayed].correctAnswer) {
            correctAnswerTotal++;
            $("#correct").html(correctAnswerTotal);
            $("#timer").html("Correct, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        else {
            incorrectAnswerTotal++;
            $("#incorrect").html(incorrectAnswerTotal);
            $("#timer").html("Incorrect, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        setTimeout(function(){
            questionDisplayed++;
            pullQuestion ();
            timerInterval ();
        }, 3000);
    })

    $("#answerD").click(function(){
        clearInterval(timer);
        if (questions[questionDisplayed].answers[3] === questions[questionDisplayed].correctAnswer) {
            correctAnswerTotal++;
            $("#correct").html(correctAnswerTotal);
            $("#timer").html("Correct, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        else {
            incorrectAnswerTotal++;
            $("#incorrect").html(incorrectAnswerTotal);
            $("#timer").html("Incorrect, the answer was " + questions[questionDisplayed].correctAnswer);
        }
        setTimeout(function(){
            questionDisplayed++;
            pullQuestion ();
            timerInterval ();
        }, 3000);
    })

})