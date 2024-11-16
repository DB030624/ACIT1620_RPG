const boardElement = document.getElementById("board");
const messageElement = document.getElementById("message");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function handleCellClick(event) {
    const cellIndex = Array.from(boardElement.children).indexOf(event.target);
    if (board[cellIndex] === "" && gameActive) {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkResult() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            messageElement.textContent = `${board[a]} wins!`;
            return;
        }
    }

    if (!board.includes("")) {
        gameActive = false;
        messageElement.textContent = "It's a draw!";
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    messageElement.textContent = "";
    boardElement.innerHTML = "";
    createBoard();
}

function createBoard() {
    boardElement.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("click", handleCellClick);
        boardElement.appendChild(cell);
    }
}

createBoard();
