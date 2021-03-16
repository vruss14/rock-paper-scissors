let startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", openGame);

function openGame () {

    let modal = document.createElement("modal");
    modal.setAttribute("class", "modal-style");
    modal.setAttribute("id", "game-modal");
    document.body.children[1].append(modal);

    let heading = document.createElement("h1");
    heading.setAttribute("class", "game-header");
    heading.textContent = "Rock, Paper, Scissors";
    modal.append(heading);

    let gameDescr = document.createElement("p");
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

let main = $("#content-wrapper");
main.on("click", ".option-btns", runResults);

function runResults(event) {
    let optionClicked = $(event.target);
    let userMove = optionClicked[0].innerHTML;
    runComputerMove(userMove);
}

function runComputerMove (userMove) {
    document.getElementById("game-modal").innerHTML = "";

    let modalTwo = document.getElementById("game-modal");

    let options = ["Rock", "Paper", "Scissors"];

    let computerMove = options[Math.floor(Math.random() * options.length)];

    console.log(computerMove);

    let computerResult = document.createElement("h1");
    computerResult.setAttribute("class", "game-header");
    computerResult.textContent = "The computer chose: " + computerMove;
    modalTwo.appendChild(computerResult);

    console.log(userMove);

    if (userMove == computerMove) {
        let tieText = document.createElement("h2");
        tieText.setAttribute("class", "result-text");
        tieText.textContent = "It's a tie!";
        modalTwo.appendChild(tieText);
        console.log("Tie");
    } else if (userMove == "Rock" && computerMove == "Scissors") {
        let winText = document.createElement("h2");
        winText.setAttribute("class", "result-text");
        winText.textContent = "You win!";
        modalTwo.appendChild(winText);
        console.log("Win");
    } else if (userMove == "Paper" && computerMove == "Rock") {
        let winText = document.createElement("h2");
        winText.setAttribute("class", "result-text");
        winText.textContent = "You win!";
        modalTwo.appendChild(winText);
        console.log("Win");
    } else if (userMove == "Scissors" && computerMove == "Paper") {
        let winText = document.createElement("h2");
        winText.setAttribute("class", "result-text");
        winText.textContent = "You win!";
        modalTwo.appendChild(winText);
        console.log("Win");
    } else {
        let loseText = document.createElement("h2");
        loseText.setAttribute("class", "result-text");
        loseText.textContent = "You lose!";
        modalTwo.appendChild(loseText);
        console.log("Lose");
    }

    let playAgainBtn = document.createElement("button");
    playAgainBtn.setAttribute("class", "again-btn");
    playAgainBtn.textContent = "Play again?";
    modalTwo.appendChild(playAgainBtn);

}

// main.on("click", ".again-btn", runAgain);

// function runAgain() {
//     document.getElementById("game-modal").innerHTML = "";
//     openGame();
// }
