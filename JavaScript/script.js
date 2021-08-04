/*
TITLE: Rock, Paper, Scissors!

PROCESS:
1. Player chooses either rock, paper, or scissors.
2. Once chosen, a count down will say "Rock, Paper, Scissors, Shoot!"
3. Code is applied for storing and applying player information, bot information, and scoreboard information.
4. Who ever wins, it will display who won OR tie.
5. Counter will count who won.

NOTES:
Things needed to be made:
- A count down of rock, paper, scissors after the player makes a choice.
- A counter of how many wins, losses, ties, and rounds.
- Storing values of the player choice and bot choice.
- Reset button.
- Try again button.
- Bot logic.
- Animations for each frame.

Basic logic:
rock > scissors
scissors > paper
paper > rock

TIE if both players have the same choice. No points awarded.
--

CHALLENGES:
Challenge: Figuring out how to modify the DOM using JavaScript to create animations. 
Solution: I tested and created the animations with HTML and CSS. Once I was satisfied, I appended the class names (with the animations already in the CSS) using JavaScript so the animations can be ran at the right time.

Challenge: Bot logic. I needed a way to have the bot randomly choose rock, paper, or scissors.
Solution: I used the Math.random() function to return a random number between 0 and 1. Then I multiplied the value by 2 then add 1. Once I got that value, I used Math.round() function to round the number. That resulted in a random number between 1 and 3. From there I assigned either rock, paper, scissors based on the value.

1 === Rock
2 === Paper
3 === Scissors

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
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let delayInMilliseconds = 100;
let round = 0;
let ties = 0;
let result = undefined; 
let winnerText = undefined;
const gameboard_3_timeout = 4000;
// variable for setTimeout() and getting clearTimeout() to work
let timeOut = undefined;

// select ElementById
const roundUpdate = document.getElementById("scoreboard_round");
const playerWinsUpdate = document.getElementById("scoreboard_player_wins");
const playerLossesUpdate = document.getElementById("scoreboard_player_losses");
const botWinsUpdate = document.getElementById("scoreboard_bot_wins");
const botLossesUpdate = document.getElementById("scoreboard_bot_losses");
const tiesUpdate = document.getElementById("scoreboard_ties");

const selectRock = document.getElementById("rock_1");
const selectPaper = document.getElementById("paper_1");
const selectScissors = document.getElementById("scissors_1");

const selectGameboard1 = document.getElementsByClassName("gameboard_1")[0];
const selectGameboard2 = document.getElementsByClassName("gameboard_2")[0];
const selectGameboard3 = document.getElementsByClassName("gameboard_3")[0];

function scoreboardUpdate() {
  roundUpdate.textContent = round;
  playerWinsUpdate.textContent = player.playerWins;
  playerLossesUpdate.textContent = player.playerLosses
  botWinsUpdate.textContent = bot.botWins
  botLossesUpdate.textContent = bot.botLosses
  tiesUpdate.textContent = ties;
}

scoreboardUpdate();

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

// assigns player choice.
selectRock.addEventListener("click", () => {
  player.playerChoice = rock; 
  gameLogic(player.playerChoice, bot.botChoice);
});

selectPaper.addEventListener("click", () => {
  player.playerChoice = paper;
  gameLogic(player.playerChoice, bot.botChoice);
});

selectScissors.addEventListener("click", () => {
  player.playerChoice = scissors;
  gameLogic(player.playerChoice, bot.botChoice);
});

// determines who wins based on playerChoice and botChoice as well as storing the values of win/losses/ties.
function gameLogic(playerChoice, botChoice) {
  gameboard_2();

  if ((playerChoice == "Rock" && botChoice == "Scissors") || (playerChoice == "Scissors" && botChoice == "Paper") || (playerChoice == "Paper" && botChoice == "Rock")) {
    winnerText = "Player Wins!";
    player.playerWins++;
    bot.botLosses++;
  }
  else if ((botChoice == "Rock" && playerChoice == "Scissors") || (botChoice == "Scissors" && playerChoice == "Paper") || (botChoice == "Paper" && playerChoice == "Rock")) {
    winnerText = "Bot Wins!";
    player.playerLosses++;
    bot.botWins++;
  }
  else {
    winnerText = "Tie!";
    ties++;
  }

  round++;

  timeOut = setTimeout(gameboard_3, gameboard_3_timeout);
}

// second frame showing the ...rock, ...paper, ...scissors with animation.
function gameboard_2() {
  // removes gameboard_1[0] from the page.
  selectGameboard1.style.display = "none";

  // displays gameboard_2[0] on the page.
  selectGameboard2.style.display = "flex";

  // select rock element for animation. childNodes indexes are spaced out as 
  const selectRock = selectGameboard2.childNodes[1];
  selectRock.setAttribute("id", "rock_animation");
  selectRock.style.cssText = "animation-name: appear_and_disappear;";
  
  // select paper element for animation.
  const selectPaper = selectGameboard2.childNodes[3];
  selectPaper.setAttribute("id", "paper_animation");
  selectPaper.style.cssText = "animation-name: appear_and_disappear;";

  // select scissors element for animation.
  const selectScissors = selectGameboard2.childNodes[5];
  selectScissors.setAttribute("id", "scissors_animation");
  selectScissors.style.cssText = "animation-name: appear_and_disappear;";

  // select shoot element for animation.
  const selectShoot = selectGameboard2.childNodes[7];
  selectShoot.setAttribute("id", "shoot_animation");
  selectShoot.style.cssText = "animation-name: appear_and_disappear;";
}

// last frame showing who won.
function gameboard_3() {
  const selectPlayerChoice = player.playerChoice;
  const selectBotChoice = bot.botChoice;

  // removes gameboard_2 on the page.
  selectGameboard2.style.display = "none";
  
  // makes gameboard_3 visible.
  selectGameboard3.style.display = "grid";

  // updates gameboard_3 > h2 text to winnerText value.
  selectGameboard3.childNodes[1].textContent = winnerText;

  // updates gameboard_3 > first div > p to selectPlayerChoice value.
  selectGameboard3.childNodes[3].childNodes[3].textContent = selectPlayerChoice;
  
  // updates gameboard_3 > first div > img.
  selectGameboard3.childNodes[3].childNodes[5].src = "./Images/" + selectPlayerChoice + ".png";

  // updates gameboard_3 > second div > p to selectBotChoice value.
  selectGameboard3.childNodes[5].childNodes[3].textContent = selectBotChoice;

  // updates gameboard_3 > second div > img.
  selectGameboard3.childNodes[5].childNodes[5].src = "./Images/" + selectBotChoice + ".png";

  scoreboardUpdate();
}

// play again button
let selectPlayAgainButton = document.getElementsByClassName("play_again_button")[0];

selectPlayAgainButton.addEventListener("click", playAgain);

function playAgain() {
  selectGameboard1.style.display = "block";
  selectGameboard2.style.display = "none";
  selectGameboard3.style.display = "none";

  botChoice();
}

// reset button
let selectButton = document.getElementById("reset_button");

selectButton.addEventListener("click", () => {
  // using playAgain function to reset animations
  playAgain();

  // clearTimeout() method for gameboard_3 to fix the bug where if you quickly select a combination of a choice and the reset button, it still displays gameboard_3
  clearTimeout(timeOut);
  
  round = 0;
  player.playerWins = 0;
  player.playerLosses = 0;
  bot.botWins = 0;
  bot.botLosses = 0;
  ties = 0;

  scoreboardUpdate();
});