let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let you = document.querySelector(".you p");
let comp = document.querySelector(".comp p");
let msg = document.querySelector(".msg1");
let userScore = 0;
let compScore = 0;
let choices = ["rock", "paper", "scissors"];
let playGame = (userChoice) => {
    let randomIndex = Math.floor(Math.random() * 3);
    let compChoice = choices[randomIndex];
    if (userChoice === compChoice) {
        msg.textContent = "Game Draw!";
    }
    else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        userScore++;
        msg.textContent = "You Win!";
    }
    else {
        compScore++;
        msg.textContent = "Computer Wins!";
    }
    you.textContent = userScore;
    comp.textContent = compScore;
    console.log("Your choice:", userChoice);
    console.log("Computer choice:", compChoice);
};
img1.onclick = () => {
    playGame("rock");
};
img2.onclick = () => {
    playGame("paper");
};
img3.onclick = () => {
    playGame("scissors");
};
