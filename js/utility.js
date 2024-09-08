function getARandomAlphabet() {
    // create an alphabet array
    const alphabetString = "abcdefghijklmopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");
    // console.log(alphabetArray);

    // get a random index number from 0 to 25
    const randomIndex = Math.round(Math.random() * 25 - 0);
    // console.log(randomIndex, alphabetArray[randomIndex]);
    return alphabetArray[randomIndex];
}
// getARandomAlphabet();

function setBgById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add("bg-orange-400");
}
