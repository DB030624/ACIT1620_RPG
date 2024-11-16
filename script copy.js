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
        ],
        background: "#ffc107", // Bright yellow
    },
    rightPath: {
        text: "A wild animal blocks your way.",
        choices: [
            { text: "Try to scare it off", next: "scareAnimal" },
            { text: "Run away", next: "runAway" }
        ],
        background: "#d9534f", // Red for danger

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
        ],
        background: "#6f42c1" // Purple for mystery

    },
    scareAnimal: { 
        text: "The animal runs away. You continue safely.", 
        choices: [
            {text: "Go Back", next: "start"}
        ],
        background: "#5bc0de" // Calm blue

    },
    runAway: { 
        text: "You fall and hurt yourself. Game over.",
        choices: [
            {text: "Go back", next: "start"}
        ],
        background: "#343a40" // Dark gray
    }
};


const storyTextElement = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");
const gameElement = document.getElementById("game");

function displayStory(part) {
    storyTextElement.textContent = ''; 
    let index = 0;
    
    function textWriter(callback) {
        if (index < story[part].text.length) {
            storyTextElement.textContent += story[part].text.charAt(index);
            index++;
            setTimeout(() => textWriter(callback), 30); 
        } else {
            callback(); // Call the callback function once text writing is complete
        }
    }

    textWriter(() => { // Pass a callback function to handle the choices once the text is fully written
        choicesElement.innerHTML = ""; // Clear previous choices

        gameElement.style.backgroundColor = story[part].background || "white"; //Changes background to the part we are at
        
        // the ? Checks if choices exists first
        story[part].choices?.forEach(choice => {
            const button = document.createElement("button"); //makes a button on each.
            button.textContent = choice.text; //the text of the button will be text of choice.
            // button.style.margin = '20px';
            button.onclick = () => displayStory(choice.next); //on button click, move on to the next story slide
            choicesElement.appendChild(button);
        });
    });
}

// Start the game
displayStory("start");
