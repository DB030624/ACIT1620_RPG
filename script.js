const story = {
    start: {
        text: "You find yourself in a dark forest. Two paths lie ahead.",
        choices: [
            { text: "You are heading to the Forest", next: "leftPath" },
            { text: "You are heading to the Cave", next: "rightPath" }
        ],
        background: "lightblue"
    },
    leftPath: {
        text: "You encounter a friendly traveler who offers you a map.",
        choices: [
            { text: "Accept the map", next: "mapAccepted" },
            { text: "Decline the offer", next: "noMap" }
        ]
    },
    rightPath: {
        text: "A wild animal blocks your way.",
        choices: [
            { text: "Try to scare it off", next: "scareAnimal" },
            { text: "Run away", next: "runAway" }
        ]
    },
    // Continue defining outcomes or further choices for each option
    mapAccepted: { 
        text: "The map guides you safely home. You win!",
        choices: [
            {text: "Go back", next: "start"}
        ] 
    },
    noMap: { 
        text: "You wander lost for hours. Game over.",
        choices: [
            {text: "Go Back", next: "start"}
        ] 
    },
    scareAnimal: { 
        text: "The animal runs away. You continue safely.", 
        choices: [
            {text: "Go Back", next: "start"}
        ]
    },
    runAway: { 
        text: "You fall and hurt yourself. Game over.",
        choices: [
            {text: "Go back", next: "start"}
        ] }
};


const storyTextElement = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");

function displayStory(part) {
    storyTextElement.textContent = ''; 
    let index = 0;
    function textWriter() {
        if (index < story[part].text.length) {
            storyTextElement.textContent += story[part].text.charAt(index);
            index++;
            setTimeout(textWriter, 30); 
        }
    }
    textWriter();
    choicesElement.innerHTML = ""; // Clear previous choices

    document.getElementById("game").style.backgroundColor = story[part].background || "lightpink";
    
    story[part].choices?.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.style.margin = '20px';
        button.onclick = () => displayStory(choice.next);
        choicesElement.appendChild(button);
    });
}
// Start the game
displayStory("start");
