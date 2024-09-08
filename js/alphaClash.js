document.getElementById("playNowBtn").addEventListener("click", function () {
    // hide the home screen
    const homeSection = document.getElementById("homeScreen");
    homeSection.classList.add("hidden");
    // show the playground
    document.getElementById("playGround").classList.remove("hidden");
    continueGame();
});

function continueGame() {
    // generate a random alphabet
    const randomCharacter = getARandomAlphabet();
    console.log("your random alphabet is ", randomCharacter);

    const currentAlphabetElement = document.getElementById("currentAlphabet");
    currentAlphabetElement.innerText = randomCharacter;

    setBgById(randomCharacter);
}
