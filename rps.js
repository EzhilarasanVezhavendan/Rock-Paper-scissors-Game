"use strict";

let score = 0;
let tries = 0;
let maxTries = 0;

window.onload = function () {
  maxTries = parseInt(prompt("How many tries do you want Buddy (Max: 10)"), 10);
  if (isNaN(maxTries) || maxTries < 1 || maxTries > 10) {
    maxTries = 5;
    alert("Invalid input. Setting tries to 5 by default.");
  }
  updateProgressBar();
};

function Guess(event) {
  try {
    if (tries >= maxTries) return;

    const options = ["Paper", "Scissors", "Rock"];
    const computerChoice = options[Math.floor(Math.random() * 3)];
    const userChoice = event.target.textContent;

    const result =
      computerChoice === userChoice
        ? "MATCH DRAW"
        : (computerChoice === "Rock" && userChoice === "Paper") ||
          (computerChoice === "Paper" && userChoice === "Scissors") ||
          (computerChoice === "Scissors" && userChoice === "Rock")
        ? "Congratulations You Won The Computer"
        : "Sorry Better Luck Next Time";

    document.getElementById("Love_You_Buddy").innerHTML = `
      <div class="alert alert-secondary" role="alert">
        Computer: <strong>${computerChoice}</strong> | You: <strong>${userChoice}</strong> <br>
        ➤ <strong>${result}</strong>
      </div>
    `;

    if (result.includes("Won")) {
      score++;
    }

    tries++;
    updateProgressBar();

    document.getElementById("Score").innerHTML = `
      <div class="alert alert-success" role="alert">
        Your Score Is <strong>${score}</strong> Buddy
      </div>
    `;

    if (tries >= maxTries) {
      document.querySelectorAll(".btn-dark").forEach(btn => btn.disabled = true);

      const retryButton = document.createElement("button");
      retryButton.innerText = "Retry";
      retryButton.className = "btn btn-danger px-5 mb-3";
      retryButton.onclick = () => window.location.reload();
      document.getElementById("Retry").appendChild(retryButton);

      if (score === maxTries) {
        alert("Wow! You won every round Buddy! 🏆");
      } else if (score >= Math.ceil(maxTries / 2)) {
        alert("Great job! You won more than half the rounds! 🎉");
      } else {
        alert("Better luck next time Buddy! Keep practicing 💪");
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function updateProgressBar() {
  const progress = (tries / maxTries) * 100;
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${progress}%`;
  progressBar.innerText = `${tries} / ${maxTries}`;
}
