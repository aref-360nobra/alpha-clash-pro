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
    // console.log("player pressed", playerPressed);
    // get expected pressed
    const currentAlphabetElement = document.getElementById("currentAlphabet");
    const targetLetter = currentAlphabetElement.innerText.toLowerCase();
    // console.log(currentAlphabetElement.innerText);
    console.log(playerPressed, targetLetter);
}
document.addEventListener("keyup", handleKeyUpEvent);

function continueGame() {
    // generate a random alphabet
    const randomCharacter = getARandomAlphabet();
    console.log("your random alphabet is ", randomCharacter);

    const currentAlphabetElement = document.getElementById("currentAlphabet");
    currentAlphabetElement.innerText = randomCharacter;

    setBgById(randomCharacter);
}
