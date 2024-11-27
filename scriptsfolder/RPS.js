const rpsButtons = document.querySelector("#rpsButtons");
const playerChoiceImg = document.querySelector("#playerRpsImage")
const CpuChoiceImg = document.querySelector("#cpuRpsImage")

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
    switch(playerChoice)
    {
        case "Rock":
            playerChoiceImg.setAttribute("src", "backgroundimages/rock.jpg")
            break;

        case "Paper":
            playerChoiceImg.setAttribute("src", "backgroundimages/paper.jpg")
            break

        case "Scissors":
            playerChoiceImg.setAttribute("src", "backgroundimages/rock.jpg")
            break
    }
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
        updateCounter()
        rpsButtons.style.display = "none"
        buttonContainer.forEach(button => button.style.display = "flex")
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
        rpsButtons.style.display = "none"
        buttonContainer.forEach(button => button.style.display = "flex")
    }
}