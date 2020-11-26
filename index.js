const readLineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blue("Mirzapur Quiz"));

var userName  = readLineSync.question('What is your name?\n');

var score = 0;

function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("right!"));
    score = score + 1;
  }else{
    console.log(chalk.red("wrong!"));
  }

  console.log("Current Score: ", score);
  console.log("--------------------");
}

//play("In which place is the show based?", "Mirzapur");
//play("What is Munna Bhaiya's formal name?", "Phoolchand Tripathi");

var questions = [{
question:"In which place is the show based? \n*Mirzapur \n*Delhi \n*Agra \n*Jaipur \nAns:", 
answer:"Mirzapur"},
{question:"What is Munna Bhaiya's formal name? \n*Munna Tripathi  \n*Satyanand Tripathi \n*Phoolchand Tripathi \n*Akhandanad Tripathi \n*Ans:",
answer:"Phoolchand Tripathi"},
{question:"What is Akandanand Tripathi's nickname? \n*Katta Bhaiya \n*Kaleen Bhaiya \n*Sher Bhaiya \n*Raja Bhaiya \nAns:",
answer:"Kaleen Bhaiya"},
{question:"What does Guddu Bhaiya's father work as? \n*Lawyer \n*Doctor \n*Judge \n*Professor \nAns:",
answer:"Lawyer"},
{question:"How many siblings does Guddu Bhaiya have? \n*One \n*Two \n*Three \n*Zero \nAns:",
answer:"Two"},
{question:"Kaleen Bhaiya is also called ____ of Mirzapur? \n*Lion \n*King \n*Queen \n*Prince \n*Ans:",
answer:"King"}];


for(var i = 0; i < questions.length; i++){
  currentQuestion = questions[i];
  play( currentQuestion.question,  currentQuestion.answer );
}

var scoreBoard = [{name:"Pranam", 
score:6},
{name:"Chirag", 
score:6},
{name:" ",
score:" "}];

function scoreBoardUpdate(newName, newScore){

    for(var i = scoreBoard.length - 1; i < scoreBoard.length; i++){
      scoreBoard[i].name = newName;
      scoreBoard[i].score = newScore;
    }
}

scoreBoardUpdate(userName, score);


console.log("High Scores:");
for(var i = 0; i < scoreBoard.length;i++){
  console.log(scoreBoard[i].name, scoreBoard[i].score);
}



