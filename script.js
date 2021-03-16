let startBtn = document.getElementById("start-btn");

let modal = document.createElement("modal");
modal.setAttribute("class", "modal-style");
modal.setAttribute("id", "game-modal");
modal.setAttribute("style", "display: none;");
document.body.children[1].append(modal);

let wins = 0;
let ties = 0;
let losses = 0;

startBtn.addEventListener("click", openGame);


// Creates first screen with user options

function openGame () {

    modal.setAttribute("style", "display: flex;");
    startBtn.setAttribute("style", "display: none");

    document.body.setAttribute("style", "background-color: gray");

    let heading = document.createElement("h1");
    heading.setAttribute("class", "game-header");
    heading.textContent = "Rock, Paper, Scissors";
    modal.append(heading);

    let gameDescr = document.createElement("h3");
    gameDescr.setAttribute("class", "paragraphs");
    gameDescr.textContent = "Battle the computer by selecting rock, paper, or scissors!";
    modal.append(gameDescr);

    let btnWrapper = document.createElement("div");
    btnWrapper.setAttribute("class", "btn-wrapper");
    btnWrapper.setAttribute("id", "choices");
    modal.append(btnWrapper);

    let rockBtn = document.createElement("button");
    rockBtn.setAttribute("class", "option-btns");
    rockBtn.textContent = "Rock";
    btnWrapper.append(rockBtn);

    let paperBtn = document.createElement("button");
    paperBtn.setAttribute("class", "option-btns");
    paperBtn.textContent = "Paper";
    btnWrapper.append(paperBtn);

    let scissorsBtn = document.createElement("button");
    scissorsBtn.setAttribute("class", "option-btns");
    scissorsBtn.textContent = "Scissors";
    btnWrapper.append(scissorsBtn);
    
}

// Reads user input

let main = $("#content-wrapper");
main.on("click", ".option-btns", runResults);

function runResults(event) {
    let optionClicked = $(event.target);
    let userMove = optionClicked[0].innerHTML;
    runComputerMove(userMove);
}

// Compares user input and computer output to determine win/tie/loss

function runComputerMove (userMove) {
    document.getElementById("game-modal").innerHTML = "";

    let modalTwo = document.getElementById("game-modal");
    let options = ["Rock", "Paper", "Scissors"];
    let computerMove = options[Math.floor(Math.random() * options.length)];

    let computerResult = document.createElement("h1");
    computerResult.setAttribute("class", "game-header");
    computerResult.textContent = "The computer chose: " + computerMove;
    modalTwo.appendChild(computerResult);

    if (userMove == computerMove) {
        let tieText = document.createElement("h2");
        tieText.setAttribute("class", "result-text");
        tieText.textContent = "It's a tie!";
        modalTwo.appendChild(tieText);
        ties++;
    } else if (userMove == "Rock" && computerMove == "Scissors") {
        let winText = document.createElement("h2");
        winText.setAttribute("class", "result-text");
        winText.textContent = "You win!";
        modalTwo.appendChild(winText);
        wins++;
    } else if (userMove == "Paper" && computerMove == "Rock") {
        let winText = document.createElement("h2");
        winText.setAttribute("class", "result-text");
        winText.textContent = "You win!";
        modalTwo.appendChild(winText);
        wins++;
    } else if (userMove == "Scissors" && computerMove == "Paper") {
        let winText = document.createElement("h2");
        winText.setAttribute("class", "result-text");
        winText.textContent = "You win!";
        modalTwo.appendChild(winText);
        wins++;
    } else {
        let loseText = document.createElement("h2");
        loseText.setAttribute("class", "result-text");
        loseText.textContent = "You lose!";
        modalTwo.appendChild(loseText);
        losses++;
    }

    let playAgainBtn = document.createElement("button");
    playAgainBtn.setAttribute("class", "again-btn");
    playAgainBtn.textContent = "Play again?";
    modalTwo.appendChild(playAgainBtn);

    // Results are changed each time the game is played

    let winNumber = document.createElement("h3");
    winNumber.setAttribute("class", "paragraphs");
    winNumber.textContent = "Wins: " + wins;
    modalTwo.appendChild(winNumber);

    let tieNumber = document.createElement("h3");
    tieNumber.setAttribute("class", "paragraphs");
    tieNumber.textContent = "Ties: " + ties;
    modalTwo.appendChild(tieNumber);

    let loseNumber = document.createElement("h3");
    loseNumber.setAttribute("class", "paragraphs");
    loseNumber.textContent = "Losses: " + losses;
    modalTwo.appendChild(loseNumber);
}

main.on("click", ".again-btn", runAgain);

// To play the game again

function runAgain() {
    document.getElementById("game-modal").innerHTML = "";
    openGame();
}
