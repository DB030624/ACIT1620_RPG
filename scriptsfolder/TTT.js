const boardElement = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const messageElement = document.getElementById("TTTmessage");
const resetButton = document.getElementById("resetTTT");
let currentPlayer = "X";
let gameActive = true;
let resetCounter = 0;

cells.forEach(cell => cell.addEventListener("click", handleCellClick));

function handleCellClick(event) {
    const cell = event.target;
    if (cell.textContent === "" && gameActive) {
        cell.textContent = currentPlayer;
        
        // Add the clicked class to trigger the animation
        cell.classList.add("clicked");
        // This changes color when a cell is clicked on
        cell.style.backgroundColor = 'paleturquoise';
        checkResult();
        if (gameActive) {
            currentPlayer = "O";
            computerMove();
            checkResult();
            currentPlayer = "X";
        }
    }
}

function computerMove() {
    // this finds all the possible cells that are empty
    const availableCells = Array.from(cells).filter(cell => cell.textContent === "");
    // return if all cells are filled
    if (availableCells.length === 0) return;
    // chooses a random cell from all the available cells using math.random()
    const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.textContent = "O";
    // changes the computer chosen cell to a different color
    randomCell.style.backgroundColor = 'palevioletred';
}

// This function is for checking if someone has won or not
function checkResult() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // .some is used on array to check if the any value within passes the conditional, returns True or False
    winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        // checks if 3 same symbol in a row
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameActive = false;
            messageElement.textContent = `${cells[a].textContent} wins!`;
            showResetButton();
            if(currentPlayer === "X") {
                // this Adds a power up if player wins
                updateCounter()
            }
            buttonContainer.forEach(button => button.style.display = "flex")
            return true;
        }
        return false;
    });

    if (gameActive && Array.from(cells).every(cell => cell.textContent !== "")) {
        gameActive = false;
        messageElement.textContent = "It's a draw!";
        showResetButton();
    }
}

function resetGame() {
    currentPlayer = "X";
    gameActive = true;
    messageElement.textContent = "";
    //this clears all the cells
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = ""
    });
    // this adds a counter everytime the reset button is pressed, you only have a limited amount of tries
    resetCounter++;

    if (resetCounter === 1) {
        resetButton.innerHTML = "1 Reset Left";
    } else if (resetCounter >= 2) {
        resetButton.style.display = "none"; 
        // Hide button after 2 resets
    }

    //hide button after reset
    resetButton.style.display = "none";

}

function showResetButton() {
    if (resetCounter < 2) {
        resetButton.style.display = "block"; // Show button after win/draw
    }
}