// saving each page into a variable
const firstPage = document.querySelector('#firstPage')
const secondPage = document.querySelector("#secondPage")
const thirdPage = document.querySelector('#thirdPage')
const fourthPage = document.querySelector('#fourthPage')
const fifthPage = document.querySelector('#fifthPage')
const tttPage = document.querySelector("#TicTacToePage")
const rpsPage = document.querySelector("#rpsPage")
const bossPage = document.querySelector("#bossPage")
var currentPage; 

// object that holds the paragraph for each page
const paragraphHolder = {
    page1: "You woke up at a strange place brother.",
    page2: "Welcome to the Forest!",
    page3: "Welcome to the Caves",
    page4: "This is the Fourth Page",
    page5: "This is the Fifth page",
    pageRps: "It's fighting time",
    pageTTT: "Win to Get a Power Boost!",
    pageBoss: "This is Boss Room"
}

const allpages = document.querySelectorAll('.page');

// saving each button as a variable
const gofirstButtons = document.querySelectorAll('.gofirst');
const gosecondButtons = document.querySelectorAll('.gosecond');
const gothirdButtons = document.querySelectorAll('.gothird');
const gofourthButtons = document.querySelectorAll('.gofourth');
const gofifthButtons = document.querySelectorAll('.gofifth')
const goRpsButtons = document.querySelectorAll('.goRps');
const goTTTButtons = document.querySelectorAll('.goTTT');
const goBossButtons = document.querySelectorAll('.goBoss');
const buttonContainer = document.querySelectorAll('.buttonContainer');

// holds all goto buttons as a array.
let goToBTN = [
    [gofirstButtons, firstPage, paragraphHolder.page1],
    [gosecondButtons, secondPage, paragraphHolder.page2],
    [gothirdButtons, thirdPage, paragraphHolder.page3],
    [gofourthButtons, fourthPage, paragraphHolder.page4],
    [gofifthButtons, fifthPage, paragraphHolder.page5],

    [goBossButtons, bossPage, paragraphHolder.pageBoss],
    [goRpsButtons, rpsPage, paragraphHolder.pageRps],
    [goTTTButtons, tttPage, paragraphHolder.pageTTT]
];

var count = 0
const counter = document.querySelector("#count");


// print out the paragraph one character at a time
function typeWriter(p)
{
    paragraph = currentPage.querySelector(".box p");
    var index = 0;
    paragraph.textContent = " ";
    const type = () => {
        if(index < p.length)
        {
            paragraph.textContent += p.charAt(index);
            index++;
            setTimeout(type, 30);
        }
        else
        {
            if(currentPage != tttPage && currentPage != rpsPage)
            {
                buttonContainer.forEach(button => button.style.display = "flex")
            }
            
        }
    }
    type();
}


// Loop through the NodeList and add a click event listener to each button
function goToButtonListener(element)
{
    element[0].forEach(button => 
    {
        button.addEventListener("click", () => 
        {
            buttonContainer.forEach(button => button.style.display = "none")
            hidepages();
            element[1].style.display = "block";
            currentPage = element[1];
            typeWriter(element[2]);
        }
    )}
)}


// loop through the gotobtn array list and call the add listener function.
goToBTN.forEach(goToButtonListener);


// Get all elements with the class 'page' and hide them
function hidepages() 
{
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

const delay = ms => new Promise(res => setTimeout(res, ms));
const shakeBoss = async () => 
{
    const bossImg = document.querySelector("#bossImgID");
    bossImg.classList.add("onHitEffect");   
    await delay(500);
    bossImg.classList.remove("onHitEffect");
}


function damageBoss()
{
    shakeBoss();
    const healthBar = document.querySelector("#health")
    healthBar.value -= (5 + 20 * count)
    if(healthBar.value <= 0)
    {
        const hitBossButton = document.querySelector("#hitBossButton")
        hitBossButton.style.display = "none"
        const bossImg = document.querySelector("#bossImgID");
        bossImg.classList.add("onDeathEffect")
    }
}



function updateCounter()
{
    count++;
    let img = document.createElement("img");
    img.setAttribute("src", "backgroundimages/sword.png");
    img.setAttribute("height", "100");
    img.setAttribute("width", "100");

   
    counter.appendChild(img)    
    
}

