document.getElementById("playNowBtn").addEventListener("click", function () {
  // hide the home screen
  const homeSection = document.getElementById("homeScreen");
  homeSection.classList.add("hidden");
  // show the playground
  document.getElementById("playGround").classList.remove("hidden");
  continueGame();
});
function handleKeyUpEvent(event) {
  playerPressed = event.key;
  const currentAlphabetElement = document.getElementById("currentAlphabet");
  const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase();
  // console.log(expectedAlphabet);

  // check right or wrong
  if (playerPressed === expectedAlphabet) {
    console.log("you got a point");
    // update score:
    // get the score element
    const currentScoreElement = document.getElementById("currentScore");
    const currentScore = parseInt(currentScoreElement.innerText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;
    // increase the score by 1
    // show the updated score

    removeClassFromClassListById(playerPressed, "bg-orange-400");
    continueGame();
  } else {
    console.log("dhurr vaia correct key press koro");
    // get the current life number
    // reduce the life count
    // display the updated life count

    const currentLifeElement = document.getElementById("life");
    const currentLife = parseInt(currentLifeElement.innerText);
    const updatedLife = currentLife - 1;
    currentLifeElement.innerText = updatedLife;

    if (updatedLife === 0) gameOver(); // source: LWS
  }
}

document.addEventListener("keyup", handleKeyUpEvent);

function continueGame() {
  // generate a random alphabet
  const randomCharacter = getARandomAlphabet();
  console.log("your random alphabet is ", randomCharacter);

  const currentAlphabetElement = document.getElementById("currentAlphabet");
  currentAlphabetElement.innerText = randomCharacter;

  addClassToClassListById(randomCharacter, "bg-orange-400");
}

//

function play() {
  addClassToClassListById("homeScreen", "hidden");
  addClassToClassListById("scoreBoard", "hidden");
  removeClassFromClassListById("playGround", "hidden");

  // reset score and life
  setTextElementValueByID("life", 4);
  setTextElementValueByID("currentScore", 0);

  continueGame();
}

function gameOver() {
  console.log("game over");
  addClassToClassListById("playGround", "hidden");
  removeClassFromClassListById("scoreBoard", "hidden");

  const lastScoreElement = document.getElementById("currentScore");
  const lastScore = lastScoreElement.innerText;
  console.log("your score is: ", lastScore);
  document.getElementById("score").innerText = lastScore;

  document.getElementById("playAgain").addEventListener("click", function () {
    play();
  });
}

// function playAgain(){
//   hideElementById("scoreBoard");
//   showElementById("play-ground");
//   continueGame();
// }
