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
count the number of rounds
--
make the game go again.
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
let delayInMilliseconds = 100;
let round = 0;
let ties = 0;
let result = undefined; 
let playAgain = undefined;

// A function to assign a random number for the bot to use in choosing either rock, paper, or scissors. 
function botChoice() {  
  // A variable called choice that will be assigned a random number 1-3. This will be used for bot.botChoice.
  let choice = Math.round(Math.random() * 2 + 1);
  
  if (choice == 1) {
    bot.botChoice = rock;
  }
  else if (choice == 2) {
    bot.botChoice = paper;
  }
  else {
    bot.botChoice = scissors;
  }

  console.log("Bot choice: " + bot.botChoice);
}

botChoice();

// Prompts the player for a choice.
function playerChoice() {
  do {
    player.playerChoice = window.prompt("Please enter: Rock, Paper, or Scissors.").toLowerCase();
  } while (player.playerChoice !== "rock" && player.playerChoice !== "paper" && player.playerChoice !== "scissors");

  console.log("Player choice: " + player.playerChoice);
}

playerChoice();

function gameLogic(playerChoice, botChoice) {
  let playerWin = "Player wins!";
  let botWin = "Bot wins!";
  let tie = "Tie!";

  if ((playerChoice == "rock" && botChoice == "scissors") || (playerChoice == "scissors" && botChoice == "paper") || (playerChoice == "paper" && botChoice == "rock")) {
    console.log("************************* " + playerWin);
    return playerWin;
  }
  else if ((botChoice == "rock" && playerChoice == "scissors") || (botChoice == "scissors" && playerChoice == "paper") || (botChoice == "paper" && playerChoice == "rock")) {
    console.log("************************* " + botWin);
    return botWin;
  }
  else {
    console.log("************************* " + tie);
    return tie;
  }
}

function scoreboard() {
  console.log("*****SCOREBOARD******");
  console.log("** Round: " + round);
  console.log("*********************");
  console.log("** Player Wins: " + player.playerWins);
  console.log("** Player Losses: " + player.playerLosses);
  console.log("*********************");
  console.log("** Bot Wins: " + bot.botWins);
  console.log("** Bot Losses: " + bot.botLosses);
  console.log("*********************");
  console.log("** Ties: " + ties);
  console.log("*********************");
}

function playItAgain(playAgain) {
    playAgain = window.confirm('Press OK to play again.');

  if (playAgain == true) {
    botChoice();
    playerChoice();
    countdown();
  }
}

function countdown() {
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
                result = gameLogic(player.playerChoice, bot.botChoice);
                
                if (result == "Player wins!") {
                  player.playerWins++;
                  bot.botLosses++;
                }
                else if (result == "Bot wins!") {
                  bot.botWins++;
                  player.playerLosses++;
                }
                else {
                  ties++;
                }

                round++;

                scoreboard();

                playAgain = undefined;

                playItAgain(playAgain);

              }, delayInMilliseconds);
          }, delayInMilliseconds);
        }, delayInMilliseconds);
      }, delayInMilliseconds);
    }, delayInMilliseconds);
  }
}

countdown();