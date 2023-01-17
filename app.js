const btn = document.getElementById("btn");
const randomNum = Math.floor(Math.random() * 100) + 1;
const attempts = document.getElementById("attempts");
const result = document.getElementById("result");
const input = document.getElementById("number");
const reset = document.getElementById("reset");
console.log(randomNum);

let counter = 1;
let lowest = 1;
let highest = 100;
btn.addEventListener("click", () => {
  let number = document.getElementById("number").value;
  input.value = "";
  attempts.textContent = `${counter}`;
  if (counter > 9) {
    result.textContent = "You lose!";
  } else if (number == randomNum) {
    result.textContent = `Congrats`;
    input.disabled = true;
  } else {
    if (number < randomNum) {
      lowest = number;
    } else if (number > randomNum) {
      highest = number;
    }
    result.textContent = `Enter a number between ${lowest} to ${highest}`;
    counter++;
  }
});
reset.addEventListener("click", () => {
  input.disabled = false;
  counter = 1;
  attempts.textContent = "";
  result.textContent = "";
  lowest = 1;
  highest = 100;
});
