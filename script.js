"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😔 You lose!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score = score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😔 You lose!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function(){
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Play😅..."
  document.querySelector(".score").textContent = score
  document.querySelector(".number").textContent = "?"
  document.querySelector(".guess").value = null;
});