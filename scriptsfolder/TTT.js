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
    const availableCells = Array.from(cells).filter(cell => cell.textContent === "");
    if (availableCells.length === 0) return;
    const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.textContent = "O";
    randomCell.style.backgroundColor = 'palevioletred';
}

function checkResult() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameActive = false;
            messageElement.textContent = `${cells[a].textContent} wins!`;
            showResetButton();
            if(currentPlayer === "X")
            {
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
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = ""
    });

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