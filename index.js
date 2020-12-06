var readline=require('readline-sync');
var chalk=require('chalk');
var score=0
var user=readline.question(chalk.bgCyan("Welcome to the world of quiz\n\n")+chalk.bgGreen("Can I know your name:\n"));

user=user.charAt(0).toUpperCase() + user.slice(1);

console.log(chalk.bgYellow("Welcome ",user+" Let's start wit know me quiz :)"));

var highScore=[
  {
  Name: "Kanishk",
  Score: 4
  },
  {
    Name: "Aman",
    Score: 3
  }];

var question=[
  {
    ques:"Who was Thanos?",
    options: "\n1. Super Vilan\n2. Super Hero\n3. God",
    ans: 1,
    follow: "\nWell This was just to check your alive!!\n"
  },
  {
    ques: "Thanos belonged to which place?",
    options: "\n1. Titan\n2. Vomir\n3. Morang",
    ans: 1,
    follow: "\nThanos was a genocidal warlord from Titan, whose own main objective was to bring stability to the universe\n"
  },
  {
    ques: "Who was daughter of Thanos?",
    options: "\n1. Hela\n2. Gamora\n3. Scarlet Witch",
    ans: 2,
    follow: "\n Gamora and Nebula were daughter of thanos\n"
  },
  {
    ques: "Thanos wanted infinity stones for?",
    options: "\n1. Kill Avangers \n2. Re-balance universe\n3. Become Strong",
    ans: 2,
    follow: "\n main objective was to bring stability to the universe, as he believed its massive population would inevitably use up the universe's entire supply of resources and condemn it\n"
  },
  {
    ques: "How did thanos came to know about avengers plan in Endgame?",
    options: "\n1. Through Gamora\n2. Through Nebula \n3. Time Travel",
    ans: 2,
    follow: "\nThanos saw avengers plan through nebula whose data was accidently synced with nebula from past.\n"
  }
];

function checkAnswers(data,res){
  if(data.ans==Number(res)){
    score++;
    console.log(
      chalk.bgGreen("Correct Answer :)\n"));
  }else{
    score--;
    console.log(
      chalk.bgRed("Wrong Answer :(\n"));
  }
  console.log(chalk.bgYellow(data.follow));
  console.log(chalk.yellow( "Score= "+score))
}

for(var i in question){
  var res=readline.question(
    chalk.bgMagenta("\n"+question[i].ques+"\n")+
    chalk.blue(question[i].options+"\n")+
    chalk.cyan("\nEnter 1/2/3 in form of your answer\n"));
  checkAnswers(question[i],res);
}

console.log(chalk.green(`\n.\n.\nThanks ${user} for using the quiz app\nYour final score is ${score} Have a great day!\n`));

console.log(chalk.bgYellow("HighScores:"));

console.table(highScore);

console.log(chalk.magenta("\nIf you beat the high score please send me a screenshot of your score\n"));