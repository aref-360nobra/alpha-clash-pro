function getARandomAlphabet() {
  // create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");
  // console.log(alphabetArray);

  // get a random index number from 0 to 25
  const randomIndex = Math.abs(Math.round(Math.random() * 25 - 1));
  console.log(randomIndex, alphabetArray[randomIndex]);
  return alphabetArray[randomIndex];
}
// getARandomAlphabet();

// add class to classList
function addClassToClassListById(elementID, className) {
  const element = document.getElementById(elementID);
  if (element) {
    element.classList.add(className);
  } else {
    console.log(`Element with ID '${elementID}' not found.`);
  }
}

function removeClassFromClassListById(elementID, className) {
  document.getElementById(elementID).classList.remove(className);
}

function setTextElementValueByID(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}
