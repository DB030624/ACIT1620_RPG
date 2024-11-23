// adding event listners for all the rps mini game buttons
rockBtn.addEventListener("click", function() 
{
    playRPS("Rock");
});            
paperBtn.addEventListener("click", function() 
{
    playRPS("Paper");
});            
scissorsBtn.addEventListener("click", function() 
{
    playRPS("Scissors");
});

// Rock paper scissors mini game code section
function playRPS(playerChoice)
{
    // random computer choice
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice)
    {
        case 1:
            game_status.innerHTML = "Your opponent choose paper!<br>";
            break;

        case 2:
            game_status.innerHTML = "Your opponent choose scissors!<br>";
            break;
        
        case 3:
            game_status.innerHTML = "Your opponent choose rock!<br>";
            break;
        
    }

    // displaying rps mini game result on the page
    if (playerChoice === "Rock" && computerChoice === 2 ||
        playerChoice === "Paper" && computerChoice === 3 ||
        playerChoice === "Scissors" && computerChoice === 1) 
    {
        game_status.innerHTML += "You Win!";
    } 
    else if (playerChoice === "Rock" && computerChoice === 3 ||
            playerChoice === "Paper" && computerChoice === 1 ||
            playerChoice === "Scissors" && computerChoice === 2) 
    {
        game_status.innerHTML += "It's a tie, try again!";
    } 
    else 
    {
        game_status.innerHTML += "You Lose...";
    }
}