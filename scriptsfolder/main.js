// saving each page into a variable
const firstPage = document.querySelector('#firstPage')
const secondPage = document.querySelector("#secondPage")
const thirdPage = document.querySelector('#thirdPage')
const fourthPage = document.querySelector('#fourthPage')
const tttPage = document.querySelector("#TicTacToePage")
const rpsPage = document.querySelector("#rpsPage")
var currentPage; 

// object that holds the paragraph for each page
const paragraphHolder = {
    page1: "You woke up at a strange place brother.",
    page2: "Welcome to the Forest!",
    page3: "Welcome to the Caves",
    page4: "This is the Fourth Page",
    pageRps: "It's fighting time",
    pageTTT: "Test6"
}

const allpages = document.querySelectorAll('.page');

// saving each button as a variable
const gofirstButtons = document.querySelectorAll('.gofirst');
const gosecondButtons = document.querySelectorAll('.gosecond');
const gothirdButtons = document.querySelectorAll('.gothird');
const gofourthButtons = document.querySelectorAll('.gofourth');
const goRpsButtons = document.querySelectorAll('.goRps');
const goTTTButtons = document.querySelectorAll('.goTTT');
const buttonContainer = document.querySelectorAll('.buttonContainer')

// holds all goto buttons as a array.
let goToBTN = [
    [gofirstButtons, firstPage, paragraphHolder.page1],
    [gosecondButtons, secondPage, paragraphHolder.page2],
    [gothirdButtons, thirdPage, paragraphHolder.page3],
    [gofourthButtons, fourthPage, paragraphHolder.page4],
    
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
            buttonContainer.forEach(button => button.style.display = "flex")
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

// goToButtonListener(gofirstButtons, firstPage);
// goToButtonListener(gosecondButtons, secondPage);
// goToButtonListener(gothirdButtons, thirdPage);
// goToButtonListener(gofourthButtons, fourthPage);
// goToButtonListener(goTTTButtons, tttPage);
// goToButtonListener(goRpsButtons, rpsPage);



// gofirstButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         hidepages();
//         firstPage.style.display = 'block';
//         count = 0
//         counter.textContent = count
//     });
// });

// gosecondButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         hidepages();
//         secondPage.style.display = 'block';
//         count++
//         counter.textContent = count
//     });
// });

// gothirdButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         hidepages();
//         thirdPage.style.display = 'block';
//     });
// });

// gofourthButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         hidepages();
//         fourthPage.style.display = 'block';
//         let fourthresult = document.querySelector('#fourthresult');
//         if (count === 1) {
//             fourthresult.innerHTML = "you won"
//         } else if (count === 0) {
//             fourthresult.innerHTML = ''
//         }
//     });
// });

// goRpsButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         hidepages();
//         document.querySelector('#rpsPage').style.display = 'block';
//     });
// });

// goTTTButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         hidepages();
//         document.querySelector('#TicTacToePage').style.display = 'block';
//     })
// });

function hidepages() {
    // Get all elements with the class 'page' and hide them
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
}
