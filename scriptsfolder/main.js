// saving each page into a variable
const firstPage = document.querySelector('#firstPage')
const secondPage = document.querySelector("#secondPage")
const thirdPage = document.querySelector('#thirdPage')
const fourthPage = document.querySelector('#fourthPage')
const tttPage = document.querySelector("#TicTacToePage")
const rpsPage = document.querySelector("#rpsPage")
var currentPage; 


const allpages = document.querySelectorAll('.page');

// saving each button as a variable
const gofirstButtons = document.querySelectorAll('.gofirst');
const gosecondButtons = document.querySelectorAll('.gosecond');
const gothirdButtons = document.querySelectorAll('.gothird');
const gofourthButtons = document.querySelectorAll('.gofourth');
const goRpsButtons = document.querySelectorAll('.goRps');
const goTTTButtons = document.querySelectorAll('.goTTT');

// holds all goto buttons as a array.
let goToBTN = [
    [gofirstButtons, firstPage],
    [gosecondButtons, secondPage],
    [gothirdButtons, thirdPage],
    [gofourthButtons, fourthPage],
    
    [goRpsButtons, rpsPage],
    [goTTTButtons, tttPage]
];

let count = 0

const counter = document.querySelector("#count");
function typeWriter()
{
    paragraph = currentPage.querySelector(".box p");
    tempParagraph = paragraph.textContent;
    console.log(tempParagraph)
    var index = 0;
    paragraph.textContent = "";
    const type = () => {
        if(index < tempParagraph.length)
        {
            paragraph.textContent += tempParagraph.charAt(index);
            index++;
            setTimeout(type, 30);
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
            hidepages();
            element[1].style.display = "block";
            currentPage = element[1];
            typeWriter();
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
