document.getElementById("playNowBtn").addEventListener("click", function () {
  // hide the home screen
  const homeSection = document.getElementById("homeScreen");
  homeSection.classList.add("hidden");
  // show the playground
  document.getElementById("playGround").classList.remove("hidden");
  continueGame();
});
function handleKeyUpEvent(event) {
  const playerPressed = event.key;
  const currentAlphabetElement = document.getElementById("currentAlphabet");
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();

  // check if r8 or wrong
  if (playerPressed === currentAlphabet) {
    console.log("You got a point");
    continueGame();
    removeClassFromClassListById(currentAlphabet, "bg-orange-400");
  } else {
    console.log("fuck you");
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
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
