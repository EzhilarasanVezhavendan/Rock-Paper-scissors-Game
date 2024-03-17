"use strict";

var buttonVal = 0;
let score = 0;

function Guess(event) {
    try {
        let options = ["Paper", "Scissors", "Rock"];
        let computerChoice = options[Math.floor(Math.random() * 3)];
        let userChoice = event.target.textContent;

        let result = computerChoice === userChoice ? "MATCH DRAW"
            : (computerChoice === "Rock" && userChoice === "Paper") || (computerChoice === "Paper" && userChoice === "Scissors") || (computerChoice === "Scissors" && userChoice === "Rock") ? "Congratulations You Won The Computer"
                : "Sorry Better Luck Next Time";

        const resultPara = document.createElement("p");
        resultPara.innerHTML = result;
        document.getElementById("Love_You_Buddy").innerHTML = "";
        document.getElementById("Love_You_Buddy").appendChild(resultPara).style.backgroundColor = "rgb(197, 153, 241)";

        event.target.remove();

        if (buttonVal === 0) {
            const retryButton = document.createElement("button");
            retryButton.innerText = "Retry";
            retryButton.setAttribute("onclick", "window.location.reload()");
            retryButton.setAttribute("class", "btn btn-danger px-5 mb-3");
            document.getElementById("Retry").appendChild(retryButton);
        }

        if (result === "Congratulations You Won The Computer") {
            score += 1;
        }

        const scorePara = document.createElement("p");
        scorePara.innerHTML = `Your Score Is ${score} Buddy`;
        document.getElementById("Score").innerHTML = "";
        document.getElementById("Score").appendChild(scorePara).style.backgroundColor = "rgb(123, 254, 136)";

        buttonVal += 1;

        if (score === 2) {
            alert("Hurray! You won the computer 2 times Buddy!!!");
        }
        else if (score === 3) {
            alert("Congratulations! You won the computer all the 3 times Buddy!!!");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        // Handle the error here, such as showing a message to the user or logging it for debugging purposes.
    }
}
