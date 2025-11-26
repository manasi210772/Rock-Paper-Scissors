let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreParagraph = document.querySelector("#user-score");
const computerScoreParagraph = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); //Generate random number between 0-2
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = '#2274A5';
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScoreParagraph.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats computer's ${computerChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else {
        computerScore++;
        computerScoreParagraph.innerText = computerScore;
        msg.innerText = `You Lose! Computer's ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const computerChoice = genComputerChoice();
    console.log("Computer choice = ", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
}
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }
    );
});