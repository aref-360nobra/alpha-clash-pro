function getARandomAlphabet() {
  // create an alphabet array
  const alphabetString = "abcdefghijklmopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");
  // console.log(alphabetArray);

  // get a random index number from 0 to 25
  const randomIndex = Math.abs(Math.round(Math.random() * 25 - 0));
//   console.log(randomIndex, alphabetArray[randomIndex]);
  return alphabetArray[randomIndex];
}
// getARandomAlphabet();

// add class to classList
function addClassToClassListById(elementID, className) {
  const element = document.getElementById(elementID);
  element.classList.add(className);
}

function removeClassFromClassListById(elementID, className) {
  document.getElementById(elementID).classList.remove(className);
}
