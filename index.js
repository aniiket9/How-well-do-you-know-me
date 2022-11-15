var readlineSync = require('readline-sync');

var score = 0;

var questions = [{
  question: 'where do i work?',
  answer: 'tekion'
},{
  question: 'where do i live?',
  answer: 'bangalore'
},{
  question: 'Am i a vegeterian?',
  answer: 'yes'
}]

function welcome(){
  var userName = readlineSync.question('what is your name?')
  console.log('Hi! ' + userName + ' Do you know Me?')  
}

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log('Right!')
    score +=1;
    console.log(score)
  }
  else{
    console.log('Wrong!')
    score -=1;
  }
}

function game(){
  for (var i=0; i<questions.length; i++) {
    var currentquestion = questions[i];
    play(currentquestion.question, currentquestion.answer)
  }
}



welcome();
game();
if(score === 3){
  console.log('You know well about me')
}else{
  console.log('you do not know much about me')
}

