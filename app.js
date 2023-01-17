const buttons = document.querySelector(".buttons");
const attempts = document.getElementById("attempts");
const result = document.getElementById("result");
const input = document.getElementById("number");
const randomNum = Math.floor(Math.random() * 100) + 1;

let counter = 1;
let lowest = 1;
let highest = 100;
buttons.addEventListener("click", (e) => {
  if (e.target.id === "btn") {
    let number = document.getElementById("number").value;
    if (number > 0 && number < 101) {
      input.value = "";
      attempts.textContent = `${counter}`;
      if (counter > 9) {
        result.style.color = "#AA1945";
        result.style.fontSize = "2rem";
        result.textContent = "You lose!";

        input.disabled = true;
      } else if (number == randomNum) {
        result.style.color = "#F9CCD3";
        result.style.fontSize = "2rem";
        result.textContent = `Congrats Number is ${number}`;
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
    } else {
      result.textContent = `Enter a number between ${lowest} to ${highest}`;
    }
  } else if (e.target.id === "reset") {
    window.location.reload();
  }
});
