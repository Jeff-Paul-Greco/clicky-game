## Clicky Game

# Instructions

Clicky Game is a memory game that uses React.js. 15 characters from the Super Mario series will appear on screen. Click them one by one, seeing how long you can avoid clicking the same face twice. Each time you click a character, the pictures on screen will be shuffled. You will see a score counter in the upper right-hand corner of the screen, along with a counter for your high score. See if you can reach 15 - a perfect score!

# Under The Hood

Clicky game uses React.js to render a Wrapper, Header, and Card component to the screen. The cards are populated via a JSON document that is mapped to each card with a corresponding character. Each time a new image is clicked its count value is incremented, marking the image as clicked until the end of the game. The score and high score are also adjusted via state change, as long as an item has not been clicked previously then the score will increment, if that score is greater than the current high score then the high score will be incremented as well. After each click a sort function remaps the image positions on screen via state change. Once the player has clicked a previously clicked image, the gameEnd function is flagged and an alert will show the player's final score.

Deployed Link: https://jeff-paul-greco.github.io/clicky-game