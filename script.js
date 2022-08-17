"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number!";

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
    // document.querySelector(".message").textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!")

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage( "🎉 Correct Number!")
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage( guess > secretNumber ? "📈 Too high!" : "📉 Too low!")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😔 You lose!";
      displayMessage("😔 You lose!")
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Play😅...";
  displayMessage("Play😅...")
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
});
