var chalk = require('chalk');
var readLineSync = require("readline-sync");
var score = 0;
//asking user's name
var username = readLineSync.question("what's your name?-");
console.log(chalk.yellow("welcome " + username + " to the js lesson one quiz"));

//game introduction and tips
console.log(chalk.red("I will test you what u learned in neoGcamp lesson one!!"));
console.log("Note! Only write the syntax!!");

//play
function playTheQuiz(question, answer) {
    var userAnswer = readLineSync.question(question);

    if(userAnswer === answer) {
        console.log("way to go!");
        score += 1;
    } else if(score <= 0) {
        console.log("sorry! please revise lesson one!");
        console.log(chalk.red("answer is: " + answer));
        score -= 1;
    }
    console.log("current Score: " + score);
}
//all questions
var questions = [{
    question: "To print anything in the console?-",
    answer: "console.log()"
},
{
    question: "To assign a variable?-",
    answer: "var"
},
{
    question: "package name to color the console?-",
    answer: "chalk"
},
{
    question: "package to read-line?-",
    answer: "readLine-sync"

}, 
{
    question: "where is the parameter keyword relate to? -",
    answer: "function"
}
];

//highscores of the users
var highScores = [{
    name: "ayush",
    score: 5
}];

//loop
for(var i = 0; i < questions.length; i++) {
    var currQue = questions[i];
    playTheQuiz(currQue.question, currQue.answer);

    if(score === 2) {
        console.log(chalk.green("Congratualtions u r on level 2"));
    } else if(score === 3) {
        console.log(chalk.green("great job there! " + username));
    } else if (score >= highScores[0].score) {
        console.log(chalk.green("Congratualtions!!, Ur score is one of the break records!!"))
    }
}

console.log("your total score: " + score);
console.log("******game-ends******");
console.log("****share your screenshot to update on server!!****");