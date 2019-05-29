var timer = 30;
var correctAnswerTimer = 5;
var resultsTimer = 5;
var correctAnswer = 0;
var incorrectAnswer = 0;
// var results = 5;

// Creating variables for each question number for when
// going through the loop, the question is shown.
var question1 = true;
var question2 = false;
var question3 = false;
var question4 = false;
var question5 = false;

// Countdown for seconds remaining for question
function Timer() {
    $("#timer").html("Time Left: 30");
    intervalID = setInterval (decrement, 1000);
}

// Question1
function question1 () {
    $("#answerDisplay").html("");
    $("#questionNumber").html("Question 1 of 5");
    $("#questions").html("Questions # 1 goes here");

    //Answers for the question
    $("answerA").html("Answer A goes here");
    $("answerB").html("Answer B goes here");
    $("answerC").html("Answer C goes here");
    $("answerD").html("Answer D goes here");

    $("#answerA").unbind("click");
    $("#answerB").unbind("click");
    $("#answerC").unbind("click");
    $("#answerD").unbind("click");
    $("#answerA").on("click", question1AnswerA);
    $("#answerB").on("click", question1AnswerB);
    $("#answerC").on("click", question1AnswerC);
    $("#answerD").on("click", question1AnswerD);

    //Adds timer to questions
    timer();
}

// Question2
function question2 () {
    $("#answerDisplay").html("");
    $("#questionNumber").html("Question 2 of 5");
    $("#questions").html("Questions # 2 goes here");

    //Answers for the question
    $("answerA").html("Answer A goes here");
    $("answerB").html("Answer B goes here");
    $("answerC").html("Answer C goes here");
    $("answerD").html("Answer D goes here");

    $("#answerA").unbind("click");
    $("#answerB").unbind("click");
    $("#answerC").unbind("click");
    $("#answerD").unbind("click");
    $("#answerA").on("click", question2AnswerA);
    $("#answerB").on("click", question2AnswerB);
    $("#answerC").on("click", question2AnswerC);
    $("#answerD").on("click", question2AnswerD);

    //Adds timer to questions
    timer();
}

// Question3
function question3 () {
    $("#answerDisplay").html("");
    $("#questionNumber").html("Question 3 of 5");
    $("#questions").html("Questions # 3 goes here");

    //Answers for the question
    $("answerA").html("Answer A goes here");
    $("answerB").html("Answer B goes here");
    $("answerC").html("Answer C goes here");
    $("answerD").html("Answer D goes here");

    $("#answerA").unbind("click");
    $("#answerB").unbind("click");
    $("#answerC").unbind("click");
    $("#answerD").unbind("click");
    $("#answerA").on("click", question3AnswerA);
    $("#answerB").on("click", question3AnswerB);
    $("#answerC").on("click", question3AnswerC);
    $("#answerD").on("click", question3AnswerD);

    //Adds timer to questions
    timer();
}

// Question4
function question4 () {
    $("#answerDisplay").html("");
    $("#questionNumber").html("Question 4 of 5");
    $("#questions").html("Questions # 4 goes here");

    //Answers for the question
    $("answerA").html("Answer A goes here");
    $("answerB").html("Answer B goes here");
    $("answerC").html("Answer C goes here");
    $("answerD").html("Answer D goes here");

    $("#answerA").unbind("click");
    $("#answerB").unbind("click");
    $("#answerC").unbind("click");
    $("#answerD").unbind("click");
    $("#answerA").on("click", question4AnswerA);
    $("#answerB").on("click", question4AnswerB);
    $("#answerC").on("click", question4AnswerC);
    $("#answerD").on("click", question4AnswerD);

    //Adds timer to questions
    timer();
}

// Question5
function question5 () {
    $("#answerDisplay").html("");
    $("#questionNumber").html("Question 5 of 5");
    $("#questions").html("Questions # 5 goes here");

    //Answers for the question
    $("answerA").html("Answer A goes here");
    $("answerB").html("Answer B goes here");
    $("answerC").html("Answer C goes here");
    $("answerD").html("Answer D goes here");

    $("#answerA").unbind("click");
    $("#answerB").unbind("click");
    $("#answerC").unbind("click");
    $("#answerD").unbind("click");
    $("#answerA").on("click", question5AnswerA);
    $("#answerB").on("click", question5AnswerB);
    $("#answerC").on("click", question5AnswerC);
    $("#answerD").on("click", question5AnswerD);

    //Adds timer to questions
    timer();
}

// function to show questions

function end() {
    clearInterval(timer);
    clearInterval(correctAnswerTimer);
    clearInterval(resultsTimer);
    $("#timer").html("Time is up.");

    //shows Question 2
    if (question1==true){
        question1 = false;
        question2 = true;
        timer = 30;
        question2();
    }

    //shows Question 3
    else if (question2==true){
        question2 = false;
        question3 = true;
        timer = 30;
        question3();
    }

    //shows Question 4
    else if (question3==true){
        question3 = false;
        question4 = true;
        timer = 30;
        question4 ();
    }

    //shows Question 5
    else if (question4==true){
        question4 = false;
        question5 = true;
        timer = 30;
        question5 ();
    }
}
















question1();