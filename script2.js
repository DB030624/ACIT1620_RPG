// Story Object
const story = {
    start: {
        text: "You find yourself in a dark forest. Two paths lie ahead.",
        background: "#4a7a44", // Forest green
        choices: [
            { text: "Take the left path", next: "leftPath" },
            { text: "Take the right path", next: "rightPath" }
        ]
    },
    leftPath: {
        text: "You encounter a traveler who challenges you to a game of Tic Tac Toe.",
        background: "#ffc107", // Bright yellow
        miniGame: () => startRockPaperScissors() // Trigger the mini-game here
    },
    rightPath: {
        text: "A wild animal blocks your way.",
        background: "#d9534f", // Red for danger
        choices: [
            { text: "Try to scare it off", next: "scareAnimal" },
            { text: "Run away", next: "runAway" }
        ]
    },
    scareAnimal: {
        text: "The animal runs away. You continue safely.",
        background: "#5bc0de" // Calm blue
    },
    runAway: {
        text: "You fall and hurt yourself. Game over.",
        background: "#343a40" // Dark gray
    },
    gameComplete: {
        text: "You defeated the traveler and continue your journey.",
        background: "#28a745", // Green for success
        choices: [
            { text: "Move on", next: "nextPath" }
        ]
    },
    nextPath: {
        text: "The journey continues to the unknown...",
        background: "#6f42c1" // Purple for mystery
    }
};

// Function to Display a Story Section
function displayStory(part) {
    const miniGameElement = document.getElementById("gameContent")
    const storyTextElement = document.getElementById("story-text");
    const choicesElement = document.getElementById("choices");
    const gameElement = document.getElementById("game");

    // Set the story text
    storyTextElement.textContent = story[part].text;
    choicesElement.innerHTML = ""; // Clear previous choices
    gameElement.style.backgroundColor = story[part].background || "rgba(232, 255, 224, 0.709)";

    // Check if a mini-game is required
    if (story[part].miniGame) {
        startRockPaperScissors(gameElement)
        // startTicTacToe(gameElement); // Start the mini-game inside the `#game` div
        return;
    }

    // Loop through choices and create buttons
    story[part].choices?.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => displayStory(choice.next);
        choicesElement.appendChild(button);
    });
}

function startTicTacToe(container) {
    // Clear the `#game` div and add the Tic Tac Toe board
    container.innerHTML = `
        <h2 id="game-status">Player X's turn</h2>

        <div id="tic-tac-toe-board" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; width: 100%; height: 300px;"></div>
        <button id="continue-button" style="display: none; margin-top: 10px;">Continue</button>
    `;

    const board = Array(9).fill(null); // 3x3 board as a 1D array
    const boardElement = document.getElementById("tic-tac-toe-board");
    const statusElement = document.getElementById("game-status");
    const continueButton = document.getElementById("continue-button");
    let currentPlayer = "X";

    

    // Create 9 buttons for the board
    board.forEach((_, index) => {
        const cell = document.createElement("button");
        cell.style.cssText = `
            width: 100%;
            height: 100%;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 1px solid black;
            background-color: white;
        `;
        cell.onclick = () => playerMove(index, cell);
        boardElement.appendChild(cell);
    });

    function playerMove(index, cell) {
        if (board[index] || currentPlayer !== "X") return; // Ignore invalid moves
        board[index] = "X";
        cell.textContent = "X";

        if (checkWinner()) {
            statusElement.textContent = "Player X wins!";
            endGame();
        } else if (board.every(cell => cell)) {
            statusElement.textContent = "It's a tie!";
            endGame();
        } else {
            currentPlayer = "O";
            statusElement.textContent = "Computer's turn";
            setTimeout(computerMove, 500); // Add delay for the computer's move
        }
    }

    function computerMove() {
        const availableCells = board
            .map((value, index) => (value === null ? index : null))
            .filter(index => index !== null);

        if (availableCells.length === 0) return; // No moves left (shouldn't happen here)

        // Simple AI: Pick a random available cell
        const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
        const cell = boardElement.children[randomIndex];
        board[randomIndex] = "O";
        cell.textContent = "O";

        if (checkWinner()) {
            statusElement.textContent = "Computer wins!";
            endGame();
        } else if (board.every(cell => cell)) {
            statusElement.textContent = "It's a tie!";
            endGame();
        } else {
            currentPlayer = "X";
            statusElement.textContent = "Player X's turn";
        }
    }

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]            // Diagonals
        ];

        return winningCombos.some(combo =>
            combo.every(index => board[index] === currentPlayer)
        );
    }

    function endGame() {
        continueButton.style.display = "block"; // Show "Continue" button
        continueButton.onclick = () => {
            // Reset the `#game` div and continue the story
            displayStory("gameComplete");
        };

        // Disable further interaction
        Array.from(boardElement.children).forEach(cell => (cell.onclick = null));
    }
}


function startRockPaperScissors(container) {
    container.innerHTML = 
    `
    <h2 id = "game_status">Rock Paper Scissors Minigame</h2>
    <div id = "RPS_board" style = "display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 15px; width: 100%; height: 100px; margin-buttom: auto;"></div>
    <button id="continue-button" style="display: none; margin-top: 10px;">Continue</button>
    `
    const boardElement = document.getElementById("RPS_board");
    const statusElement = document.getElementById("game_status");
    const continueButton = document.getElementById("continue-button");

    const rockBtn = document.createElement("button");
    rockBtn.innerHTML = "Rock";
    boardElement.appendChild(rockBtn);
    const paperBtn = document.createElement("button");
    paperBtn.innerHTML = "Paper";
    boardElement.appendChild(paperBtn);
    const scissorsBtn = document.createElement("button");
    scissorsBtn.innerHTML = "Scissors";
    boardElement.appendChild(scissorsBtn);


    rockBtn.addEventListener("click", function() 
    {
        playGame("Rock");
    });
        
    paperBtn.addEventListener("click", function() 
    {
        playGame("Paper");
    });
        
    scissorsBtn.addEventListener("click", function() 
    {
        playGame("Scissors");
    });

    function playGame(playerChoice)
    {
        const computerChoice = Math.floor(Math.random() * 3) + 1;
  
        if (playerChoice === "Rock" && computerChoice === 2 ||
            playerChoice === "Paper" && computerChoice === 3 ||
            playerChoice === "Scissors" && computerChoice === 1) 
        {
          endGame("You win!");
        } 
        else if (playerChoice === "Rock" && computerChoice === 3 ||
                   playerChoice === "Paper" && computerChoice === 1 ||
                   playerChoice === "Scissors" && computerChoice === 2) 
        {
            statusElement.textContent = "It's a tie, try again!"
        } 
        else 
        {
            return;
        }

        function endGame(result) {
            statusElement.textContent = result;
            continueButton.style.display = "block"; // Show "Continue" button
            rockBtn.removeEventListener("click", playGame);
            paperBtn.removeEventListener("click", playGame);
            scissorsBtn.removeEventListener("click", playGame);
            continueButton.onclick = () => {
                // Reset the `#game` div and continue the story
                displayStory("gameComplete");
            };
    
            // Disable further interaction
            Array.from(boardElement.children).forEach(cell => (cell.onclick = null));
        }
        
        
    }
}















// Start the story
displayStory("start");
