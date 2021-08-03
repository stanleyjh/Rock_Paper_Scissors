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

CHALLENGES:
Figuring out how to modify the CSS using JavaScript to create animations. I tested and created the animations in CSS and then added the class names into the elements using JavaScript so I can start the animation at the right time.
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
let playAgain = undefined;
const timeOut = 1500;

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

/* CONSOLE
// Prompts the player for a choice. 
function playerChoice() {
  do {
    player.playerChoice = window.prompt("Please enter: Rock, Paper, or Scissors.").toLowerCase();
  } while (player.playerChoice !== "rock" && player.playerChoice !== "paper" && player.playerChoice !== "scissors");
}

playerChoice();
*/

// assigns player choice
selectRock.addEventListener("click", () => {
  player.playerChoice = rock; 
  console.log("Player choice: " + player.playerChoice);
  gameLogic(player.playerChoice, bot.botChoice);
});

selectPaper.addEventListener("click", () => {
  player.playerChoice = paper;
  console.log("Player choice: " + player.playerChoice);
  gameLogic(player.playerChoice, bot.botChoice);
});

selectScissors.addEventListener("click", () => {
  player.playerChoice = scissors;
  console.log("Player choice: " + player.playerChoice);
  gameLogic(player.playerChoice, bot.botChoice);
});

/* CONSOLE
function gameLogic(playerChoice, botChoice) {
  let playerWin = "Player wins!";
  let botWin = "Bot wins!";
  let tie = "Tie!";

  if ((playerChoice == "rock" && botChoice == "scissors") || (playerChoice == "scissors" && botChoice == "paper") || (playerChoice == "paper" && botChoice == "rock")) {
    console.log("Player Choice: " + playerChoice);
    console.log("Bot Choice: " + botChoice);
    console.log("************************* " + playerWin);
    return playerWin;
  }
  else if ((botChoice == "rock" && playerChoice == "scissors") || (botChoice == "scissors" && playerChoice == "paper") || (botChoice == "paper" && playerChoice == "rock")) {
    console.log("Player Choice: " + playerChoice);
    console.log("Bot Choice: " + botChoice);
    console.log("************************* " + botWin);
    return botWin;
  }
  else {
    console.log("Both chose: " + playerChoice);
    console.log("************************* " + tie);
    return tie;
  }
}
*/

function preAnimation() {
  // removes all child nodes from the parent.
  selectGameboard1.innerHTML = "";

  // create ...Rock! animation
  const rock = document.createElement("p");
  const rock_text = document.createTextNode("...Rock!");
  rock.appendChild(rock_text);

  selectGameboard1.appendChild(rock);

  // adding attributes to enable the rock animation
  rock.setAttribute("id", "rock_animation");
  rock.style.cssText = "animation-name: appear_and_disappear;";

  // create ...Paper! animation
  const paper = document.createElement("p");
  const paper_text = document.createTextNode("...Paper!");
  paper.appendChild(paper_text);

  selectGameboard1.appendChild(paper);

  paper.setAttribute("id", "paper_animation");
  paper.style.cssText = "animation-name: appear_and_disappear";

  // create ...Scissors! animation
  const scissors = document.createElement("p");
  const scissors_text = document.createTextNode("...Scissors!");
  scissors.appendChild(scissors_text);

  selectGameboard1.appendChild(scissors);

  scissors.setAttribute("id", "scissors_animation");
  scissors.style.cssText = "animation-name: appear_and_disappear";

  // create ...Shoot! animation
  const shoot = document.createElement("p");
  const shoot_text = document.createTextNode("...Shoot!");
  shoot.appendChild(shoot_text);

  selectGameboard1.appendChild(shoot);

  shoot.setAttribute("id", "shoot_animation");
  shoot.style.cssText = "animation-name: appear_and_disappear";

  // remove pre-animation text
  setTimeout( () => { 
  rock.remove();
  paper.remove();
  scissors.remove();
  shoot.remove();
  }, timeOut);
}

function gameLogic(playerChoice, botChoice) {
  preAnimation();

  const playerWin = "Player wins!";
  const botWin = "Bot wins!";
  const tie = "Tie!";

  // h2 element for final animation
  const createH2 = document.createElement("h2");
  const createH2_text = document.createTextNode("");

  createH2.appendChild(createH2_text);
  selectGameboard1.appendChild(createH2);
  
  if ((playerChoice == "Rock" && botChoice == "Scissors") || (playerChoice == "Scissors" && botChoice == "Paper") || (playerChoice == "Paper" && botChoice == "Rock")) {
    createH2_text.nodeValue = playerWin;
    player.playerWins++;
    bot.botLosses++;
    scoreboardUpdate();
    postAnimation(player.playerChoice, bot.botChoice);
  }
  else if ((botChoice == "Rock" && playerChoice == "Scissors") || (botChoice == "Scissors" && playerChoice == "Paper") || (botChoice == "Paper" && playerChoice == "Rock")) {
    createH2_text.nodeValue = botWin;
    player.playerLosses++;
    bot.botWins++;
    scoreboardUpdate();
    postAnimation(player.playerChoice, bot.botChoice);
  }
  else {
    createH2_text.nodeValue = tie;
    ties++;
    scoreboardUpdate();
    postAnimation(player.playerChoice, bot.botChoice);
  }
}

function postAnimation(playerChoice, botChoice) {

  selectGameboard1.classList.add("gameboard_3");

  // player choice
  const createH3_playerChoice = document.createElement("h3");
  const createH3_playerChoice_text = document.createTextNode("You Chose:");

  // create new div element to wrap around player choice.
  const newDiv = document.createElement("div");
  selectGameboard1.appendChild(newDiv);

  createH3_playerChoice.appendChild(createH3_playerChoice_text);

  // appendChild createH3_playerChoice within newDiv
  newDiv.appendChild(createH3_playerChoice);

  const createP_playerChoice = document.createElement("p");
  const createP_playerChoice_text = document.createTextNode(playerChoice);

  createP_playerChoice.appendChild(createP_playerChoice_text);

  // appendChild createP_playerChoice within newDiv
  newDiv.appendChild(createP_playerChoice);

  const createPlayerImg = document.createElement("img");
  

  newDiv.appendChild(createPlayerImg);

  // bot choice
  const createH3_botChoice = document.createElement("h3");
  const createH3_botChoice_text = document.createTextNode("Bot Chose: ");
  const newDiv2 = document.createElement("div");

  selectGameboard1.appendChild(newDiv2);

  createH3_botChoice.appendChild(createH3_botChoice_text);
  newDiv2.appendChild(createH3_botChoice);

  const createP_botChoice = document.createElement("p");
  const createP_botChoice_text = document.createTextNode(botChoice);

  createP_botChoice.appendChild(createP_botChoice_text);
  newDiv2.appendChild(createP_botChoice);

  // play again button
  const newDiv3 = document.createElement("div");
  selectGameboard1.appendChild(newDiv3);

  // button
  const createButton = document.createElement("button");
  const createButton_text = document.createTextNode("Play again?");

  createButton.classList.add("play_again_button");

  createButton.appendChild(createButton_text);

  newDiv3.appendChild(createButton);
}

/* CONSOLE
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
*/

/* CONSOLE
function playItAgain(playAgain) {
    playAgain = window.confirm('Press OK to play again.');

  if (playAgain == true) {
    botChoice();
    playerChoice();
    countdown();
  }
}
*/ 

/* CONSOLE
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
                
                scoreboardUpdate();
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
*/

let selectButton = document.getElementById("reset_button");

selectButton.addEventListener("click", resetButton);

function resetButton() {
  round = 0;
  player.playerWins = 0;
  player.playerLosses = 0;
  bot.botWins = 0;
  bot.botLosses = 0;
  ties = 0;

  scoreboardUpdate();
}