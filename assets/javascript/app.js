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
        answer: [
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
        answer: [
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
var i;


// Creating variables for each question number for when
// // going through the loop, the question is shown.
// var question1displayed = true;
// var question2displayed = false;
// var question3displayed = false;
// var question4displayed = false;
// var question5displayed = false;

function pullQuestion () {
    $("#questionNumber").html("Question number " + questions[questionDisplayed].number + " of 5");
    $("#question").html(questions[questionDisplayed].question);
    $("#answerA").html("A: " + questions[questionDisplayed].answers[0]);
    $("#answerB").html("B: " + questions[questionDisplayed].answers[1]);
    $("#answerC").html("C: " + questions[questionDisplayed].answers[2]);
    $("#answerD").html("D: " + questions[questionDisplayed].answers[3]);
}

//Countdown for seconds remaining for question
function timer() {
    i = 10;
    
   timer = setInterval (function(){
       i--;
       $("#timer").html("Time Left: " + i);
    
       if (i === 0) {
           clearInterval(timer);
           $("#timer").html("Time is up. The correct answer was " + questions[questionDisplayed].correctAnswer + ".");
           incorrectAnswerTotal++;
           $("#incorrect").html(incorrectAnswerTotal);
       }
   }, 1000);
}


$(document).ready(function(){

    // Starts the game running
    $("#question").click(function () {
        i = 0;
        pullQuestion();
        timer();
        // checkAnswer ();
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
        }, 3000);
    })


    // function to show question

    // function endOfTimer () {
    //     clearInterval(timer);
    //     clearInterval(correctAnswerTimer);
    //     clearInterval(resultsTimer);
    //     $("#timer").html("Time is up.");

        //shows Question 2
        // if (question1displayed==true){
        //     question1displayed = false;
        //     question2displayed = true;
        //     timer = 30;
        //     question2();
        // }

        // //shows Question 3
        // else if (question2displayed==true){
        //     question2displayed = false;
        //     question3displayed = true;
        //     timer = 30;
        //     question3();
        // }

        // //shows Question 4
        // else if (question3displayed==true){
        //     question3displayed = false;
        //     question4displayed = true;
        //     timer = 30;
        //     question4 ();
        // }

        // //shows Question 5
        // else if (question4displayed==true){
        //     question4displayed = false;
        //     question5displayed = true;
        //     timer = 30;
        //     question5 ();
        // }
    // }

    // // Question1
    // function question1 () {
    //     $("#answerDisplay").html("");
    //     $("#questionNumber").html("Question 1 of 5");
    //     $("#question").html("On his first date with Robin, what instrument did Ted steal from the restaurant?");

    //     //Answers for the question
    //     $("#answerA").html("Kazoo");
    //     $("#answerB").html("Clarinet");
    //     $("#answerC").html("French Horn");
    //     $("#answerD").html("Triangle");

    //     $("#answerA").on("click", question1AnswerA);
    //     $("#answerB").on("click", question1AnswerB);
    //     $("#answerC").on("click", question1AnswerC);
    //     $("#answerD").on("click", question1AnswerD);        
    // }

    // console.log(question1);

    // // // Question2
    // function question2 () {
    //     $("#answerDisplay").html("");
    //     $("#questionNumber").html("Question 2 of 5");
    //     $("#question").html("What does GNB stand for?");

    //     //Answers for the question
    //     $("#answerA").html("Global Networking Brand");
    //     $("#answerB").html("Greenway National Bank");
    //     $("#answerC").html("Goliath National Bank");
    //     $("#answerD").html("Grant Nutritional Brand");

    //     $("#answerA").on("click", question2AnswerA);
    //     $("#answerB").on("click", question2AnswerB);
    //     $("#answerC").on("click", question2AnswerC);
    //     $("#answerD").on("click", question2AnswerD);

    //     // Adds timer to question
    //     // timer();
    // }

    // // Question3
    // function question3 () {
    //     $("#answerDisplay").html("");
    //     $("#questionNumber").html("Question 3 of 5");
    //     $("#question").html("Who did Ted not date?");

    //     //Answers for the question
    //     $("answerA").html("Zoey");
    //     $("answerB").html("Victoria");
    //     $("answerC").html("Stella");
    //     $("answerD").html("Nora");

    //     $("#answerA").on("click", question3AnswerA);
    //     $("#answerB").on("click", question3AnswerB);
    //     $("#answerC").on("click", question3AnswerC);
    //     $("#answerD").on("click", question3AnswerD);

    //     //Adds timer to question
    //     timer();
    // }

    // // Question4
    // function question4 () {
    //     $("#answerDisplay").html("");
    //     $("#questionNumber").html("Question 4 of 5");
    //     $("#question").html("Who is Robin's work enemy?");

    //     //Answers for the question
    //     $("answerA").html("Nora");
    //     $("answerB").html("Patrice");
    //     $("answerC").html("Stella");
    //     $("answerD").html("Abby");

    //     $("#answerA").on("click", question4AnswerA);
    //     $("#answerB").on("click", question4AnswerB);
    //     $("#answerC").on("click", question4AnswerC);
    //     $("#answerD").on("click", question4AnswerD);

    //     //Adds timer to question
    //     timer();
    // }

    // // Question5
    // function question5 () {
    //     $("#answerDisplay").html("");
    //     $("#questionNumber").html("Question 5 of 5");
    //     $("#question").html("How many slaps were awarded by Lily to Marshall during the Marshall-Barney Slap Bet?");

    //     //Answers for the question
    //     $("answerA").html("2");
    //     $("answerB").html("5");
    //     $("answerC").html("7");
    //     $("answerD").html("10");

    //     $("#answerA").on("click", question5AnswerA);
    //     $("#answerB").on("click", question5AnswerB);
    //     $("#answerC").on("click", question5AnswerC);
    //     $("#answerD").on("click", question5AnswerD);

    //     //Adds timer to question
    //     timer();
    // }



    //functions for answers for question 1
    // function question1AnswerA(){
    //     incorrectAnswer++;
    //     // clearInterval(Timer)
    //     $("#timer").html("Time is up.");
    //     $("#answerA").html("");
    //     $("#answerB").html("");
    //     $("#answerC").html("");
    //     $("#answerD").html("");
    //     $(".answerDisplay").html("Oops, the correct answer was French Horn.");
    //     clearInterval(resultsTimer);
    //     question2();
    // }

    // function question1AnswerB(){
    //     incorrectAnswer++;
    //     // clearInterval(Timer)
    //     $("#timer").html("Time is up.");
    //     $("#answerA").html("");
    //     $("#answerB").html("");
    //     $("#answerC").html("");
    //     $("#answerD").html("");
    //     $(".answerDisplay").html("Oops, the correct answer was French Horn.");
    //     clearInterval(resultsTimer);
    //     question2();
    // }

    // function question1AnswerC (){
    //     correctAnswer++;
    //     // clearInterval(Timer)
    //     $("#timer").html("Time is up.");
    //     $("#answerA").html("");
    //     $("#answerB").html("");
    //     $("#answerC").html("");
    //     $("#answerD").html("");
    //     $(".answerDisplay").html("Correct")
    //     clearInterval(resultsTimer);
    //     question2();
    // }

    // function question1AnswerD(){
    //     incorrectAnswer++;
    //     // clearInterval(Timer)
    //     $("#timer").html("Time is up.");
    //     $("#answerA").html("");
    //     $("#answerB").html("");
    //     $("#answerC").html("");
    //     $("#answerD").html("");
    //     $(".answerDisplay").html("Oops, the correct answer was French Horn.");
    //     clearInterval(resultsTimer);
    //     question2();
    // }

});

    // question1();
