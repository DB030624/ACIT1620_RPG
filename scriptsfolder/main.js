// saving each page into a variable
const firstPage = document.querySelector('#firstPage')
const secondPage = document.querySelector("#secondPage")
const thirdPage = document.querySelector('#thirdPage')
const fourthPage = document.querySelector('#fourthPage')
const fifthPage = document.querySelector('#fifthPage')
const tttPage = document.querySelector("#TicTacToePage")
const rpsPage = document.querySelector("#rpsPage")
const gnomePage = document.querySelector("#gnomePage")
const bossPage = document.querySelector("#bossPage")
const bossFightLose = document.querySelector("#bossFightLose")
var currentPage; 
var bossFightClickTime = 0;

// object that holds the paragraph for each page
const paragraphHolder = {
    page1: "Greetings, Traveler: You have finally awoken, disoriented at the mouth of a cave in a green, lush forest. To your left there is a treaded ground heading deeper into the forest, to your right is a mouth of a cave. Peering into it, you see a flickering light source.  Which path will you choose?",
    page2: "Following the treaded path, you come across a giant apple tree. Studying your surroundings, you hear what sounds like moving water.",
    page3: 'Nayld: "Hello traveler, be wary of these tunnels. You can follow the path with light that leads you to a settlement of unfriendly cave gnomes, or you can take your chances descending into the abandoned mine where there have been reports of buried treasure"',
    page4: "This is the Fourth Page",
    page5: "You see a gleaming stream. You jump in and let the river wash away your worries while it carries you down stream.",
    pageRps: "Ecurb the Wicked has challenged you to a duel!",
    pageTTT: "You come across a familiar game from your childhood. Use the skills you've acquired in your youth to progress! If you win, you will get a power boost!",
    pageBoss: `“WHO DARE DISTURBS MY SLUMBER” you hear from a not so far distance.
Out of the shadows steps Lord Okram, the Demon of Elarion.
“YOU! PUNY HUMAN! I WILL DESTROY YOU FOR YOUR INSOLENCE”`,
    pageGnome: `Gnome 1: "Look boys... fresh meat!"
    \n Gnome 2 & 3: "Yipee!"
    \n You were devoured by evil gnomes. You knew they were unfriendly, but you went anyways. At least you'll win a Darwin award!`
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
const goGnomeButtons = document.querySelectorAll('.goGnome')
const buttonContainer = document.querySelectorAll('.buttonContainer');

// holds all goto buttons as a array.
let goToBTN = [
    [gofirstButtons, firstPage, paragraphHolder.page1],
    [gosecondButtons, secondPage, paragraphHolder.page2],
    [gothirdButtons, thirdPage, paragraphHolder.page3],
    [gofourthButtons, fourthPage, paragraphHolder.page4],
    [gofifthButtons, fifthPage, paragraphHolder.page5],
    [goGnomeButtons, gnomePage, paragraphHolder.pageGnome],

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
    const typee = () => {
        if(currentPage == bossPage)
        {
            const hitBossButton = document.querySelector("#hitBossButton")
            hitBossButton.disabled = true;
        }
        if(index < p.length)
        {
            paragraph.textContent += p.charAt(index);
            index++;
            setTimeout(typee, 20);
        }
        else
        {
            if(currentPage != tttPage && currentPage != rpsPage)
            {
                buttonContainer.forEach(button => button.style.display = "flex")
            }
            if(currentPage == bossPage)
            {
                const hitBossButton = document.querySelector("#hitBossButton")
                hitBossButton.disabled = false;
            }
        }
    }
    typee();
}

// this is the most simple way to have different html pages without having to go to a new html file
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

const displayWinMessage = async () =>
    {
        await delay(2000)
        const bossPageWinText = document.querySelector("#bossPage .storyBox p")
        bossPageWinText.style.display = "block"
        let wintext = "Congratulation! You saved the world of Elarion."
        bossPageWinText.innerHTML = ""
        let index = 0
        const type = () => {
            if(index < wintext.length)
            {
                bossPageWinText.innerHTML += wintext.charAt(index);
                index++;
                setTimeout(type, 30);
            }
        }
        type()

    }

function damageBoss()
{
    if(bossFightClickTime < 10)
    {
        bossFightClickTime++;
        shakeBoss();
        const healthBar = document.querySelector("#health")
        healthBar.value -= (5 + 95 * count)
        if(healthBar.value <= 0)
        {
            const hitBossButton = document.querySelector("#hitBossButton")
            hitBossButton.style.display = "none"
            const bossImg = document.querySelector("#bossImgID");
            bossImg.classList.add("onDeathEffect")
            healthBar.style.display = "none"
            displayWinMessage()
        }
    }
    else
    {
        bossFightLose.style.display = "block"
        bossFightLose.classList.add("onBossLose")
    }
}



function updateCounter()
{
    count++;
    let img = document.createElement("img");
    img.setAttribute("src", "../iconimages/swordup.png");
    img.setAttribute("height", "100");
    img.setAttribute("width", "100");

   
    counter.appendChild(img)    
}
