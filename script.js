"use strict";

// document.querySelector(".message").textContent = "π Correct Number!";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;
const displayMessage = function(message){
  document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "β No Number!";
    displayMessage("β No Number!")

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "π Correct Number!";
    displayMessage( "π Correct Number!")
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "π Too high!" : "π Too low!";
      displayMessage( guess > secretNumber ? "π Too high!" : "π Too low!")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "π You lose!";
      displayMessage("π You lose!")
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Playπ...";
  displayMessage("Playπ...")
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
});
