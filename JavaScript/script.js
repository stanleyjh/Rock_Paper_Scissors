/*
TITLE: Rock, Paper, Scissors!

PROCESS:
1. player chooses either rock, paper, or scissors.
2. once chosen, a count down will say "Rock, Paper, Scissors!"
3. the window will display the chosen item.
4. logic...

5. who ever wins, it will display who won.
6. counter will count who won.

NOTES:
Things to make:
DONE - a count down of rock, paper, scissors after the player makes a choice.
- a counter of how many wins each person has.
- a reset button.
- bot 
--

rock > scissors
scissors > paper
paper > rock
TIE if same. no points awarded.
*/

// CODE

// initialize objects
const player = {
  id: "Player",
  playerChoice: undefined,
  playerWins: 0,
  playerLosses: 0
}

const bot = {
  id: "Bot",
  botChoice: undefined,
  botWins: 0,
  botLosses: 0
}

// Other variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let delayInMilliseconds = 1000;


console.log("*****SCOREBOARD******");
console.log("**Player Wins: " + player.playerWins);
console.log("**Player Losses: " + player.playerLosses);
console.log("*********************");
console.log("**Bot Wins: " + bot.botWins);
console.log("**Bot Losses: " + bot.botLosses);
console.log("*********************");

// A function to assign a random number for the bot to use in choosing either rock, paper, or scissors.
function random1To3() {
  return Math.round(Math.random() * 2 + 1);
}
botChoice = random1To3();

if (botChoice == 1) {
  bot.botChoice = rock;
}
else if (botChoice == 2) {
  bot.botChoice = paper;
}
else {
  bot.botChoice = scissors;
}

console.log("Bot Choice: " + bot.botChoice);


// Prompts the player for a choice.
do {
  player.playerChoice = window.prompt("Please enter: Rock, Paper, or Scissors..").toLowerCase();
} while (player.playerChoice !== "rock" && 
         player.playerChoice !== "paper" &&
         player.playerChoice !== "scissors");

console.log("Player choice: " + player.playerChoice);

function gameLogic(playerChoice, botChoice) {
  let playerWin = "player wins!";
  let botWin = "bot wins!";
  if (playerChoice == "rock" && botChoice == "scissors") {
    console.log(playerWin);
  }
  else if (playerChoice == "scissors" && botChoice == "paper") {
    console.log(playerWin);
  }
  else if (playerChoice == "paper" && botChoice == "rock") {
    console.log(playerWin);
  }
  else if (botChoice == "rock" && playerChoice == "scissors") {
    console.log(botWin);
  }
  else if (botChoice == "scissors" && playerChoice == "paper") {
    console.log(botWin);
  }
  else if (botChoice == "paper" && playerChoice == "rock") {
    console.log(botWin);
  }
  else {
    console.log("Tie!");
  }
}

// countdown
if (player.playerChoice != undefined) {
  setTimeout(function() {
    console.log("...");
    setTimeout(function() {
      console.log("...Rock!");
      setTimeout(function() {
        console.log("...Paper!");
        setTimeout(function() {
          console.log("...Scissors!");
            setTimeout(function() {
              gameLogic(player.playerChoice, bot.botChoice);
            }, delayInMilliseconds);
      }, delayInMilliseconds);
    }, delayInMilliseconds);
  }, delayInMilliseconds);
}, delayInMilliseconds);
}

