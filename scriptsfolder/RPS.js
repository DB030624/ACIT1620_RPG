const rpsButtons = document.querySelector("#rpsButtons");
const playerChoiceImg = document.querySelector("#playerRpsImage")
const computerChoiceImg = document.querySelector("#cpuRpsImage")
const rpsPageParagraph = document.querySelector("#rpsPage .box p")
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
    
    rpsPageParagraph.style.display = "none"
    switch(playerChoice)
    {
        case "Rock":
            playerChoiceImg.setAttribute("src", "../iconimages/flame.png")
            break;

        case "Paper":
            playerChoiceImg.setAttribute("src", "../iconimages/leaf.png")
            break

        case "Scissors":
            playerChoiceImg.setAttribute("src", "../iconimages/wave.png")
            break
    }
    // random computer choice
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice)
    {
        case 1:
            computerChoiceImg.setAttribute("src", "../iconimages/flame.png")
            break;

        case 2:
            
            computerChoiceImg.setAttribute("src", "../iconimages/leaf.png")
            break;
        
        case 3:
            computerChoiceImg.setAttribute("src", "../iconimages/wave.png")
            break;
        
    }

    // displaying rps mini game result on the page
    if (playerChoice === "Rock" && computerChoice === 2 ||
        playerChoice === "Paper" && computerChoice === 3 ||
        playerChoice === "Scissors" && computerChoice === 1) 
    {
        game_status.innerHTML = "You Win!";
        updateCounter()
        rpsButtons.style.display = "none"
        buttonContainer.forEach(button => button.style.display = "flex")
    } 
    else if (playerChoice === "Rock" && computerChoice === 1 ||
            playerChoice === "Paper" && computerChoice === 2 ||
            playerChoice === "Scissors" && computerChoice === 3) 
    {
        game_status.innerHTML = "It's a tie, try again!";
    } 
    else 
    {
        game_status.innerHTML = "You Lose...";
        rpsButtons.style.display = "none"
        buttonContainer.forEach(button => button.style.display = "flex")
    }
}