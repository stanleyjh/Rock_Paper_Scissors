# [Rock, Paper, Scissors!](https://stanleyjh.github.io/Rock_Paper_Scissors/)

## Process:
1. Player chooses either rock, paper, or scissors.
2. Once chosen, a count down will say "Rock, Paper, Scissors, Shoot!"
3. Code is applied for storing and applying player information, bot information, and scoreboard information.
4. Who ever wins, it will display who won OR tie.
5. The scoreboard will update the wins, losses, and ties.

## Notes:
### Things needed to be made:
- A count down of rock, paper, scissors after the player makes a choice.
- A counter of how many wins, losses, ties, and rounds.
- Storing values of the player choice and bot choice.
- Reset button.
- Try again button.
- Bot logic.
- Animations for each frame.

### Basic logic:
- Rock > scissors
- Scissors > paper
- Paper > rock
- TIE if both players have the same choice. No points awarded.

## Challenges:
- **Challenge**: Figuring out how to modify the DOM using JavaScript to create animations. 
- **Solution**: I tested and created the animations with HTML and CSS. Once I was satisfied, I appended the class names (with the animations already in the CSS) using JavaScript so the animations can be ran at the right time.

- **Challenge**: Bot logic. I needed a way to have the bot randomly choose rock, paper, or scissors.
- **Solution**: I used the Math.random() function to return a random number between 0 and 1. Then I multiplied the value by 2 then add 1. Once I got that value, I used Math.round() function to round the number. That resulted in a random number between 1 and 3. From there I assigned either rock, paper, scissors based on the value: 1 == Rock, 2 == Paper, 3 == Scissors.
