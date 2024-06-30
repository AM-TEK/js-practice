let userInput = prompt("enter a number");

let numberInput = parseInt(userInput);

let displayElement = document.getElementById("number-display");

let displayOddOrEven = document.getElementById("odd-even");

if (!isNaN(numberInput)) {
  displayElement.textContent = `You entered ${numberInput}`
} else {
  displayElement.textContent = "Invalid number entered" 
}

if (numberInput % 2 === 0) {
  displayOddOrEven.textContent = "Even"
} else {
  displayOddOrEven.textContent = "Odd"
}