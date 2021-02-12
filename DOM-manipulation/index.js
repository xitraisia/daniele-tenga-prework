// Instructions:

// Open index.html in your code editor and take a moment to study the code.
// Then open the file in your web browser and notice how you are prompted for various pieces of information that correspond to the incomplete HTML being rendered to the page.
// Use the values collected by each prompt to update their corresponding element, e.g. the name collected from the prompt should update the element with an id of #name.
// The #name, #color, and #season elements should be updated with the innerText property.
// Challenge:

// The #interests element should be updated with the innerHTML property. For this element, use the array of interests collected and a for-loop to insert one li tag for each interest inside of the #interest element.

// Hints:

// Have your console open ready to check for errors.
// If you are unsure about the value of a variable, print it to the console!
// Be careful about how you name your variables! It's common for code not to work due to a typo, casing matters!
// Refer to the previous example if you get stuck!

// Prompt the user for some information
const name = prompt('What is your name?');
const color = prompt('What is your favorite color?');
const season = prompt('What is your favorite season?');
let interests = prompt('What are you interested in?\nSeperate interests with a comma.\ne.g. hiking, fishing golf, etc.');

// Split is a built-in method that turns a string into an array of smaller strings, splitting them by a specified seperator (', in this case')

interests = interests.split(',');

// 1. Get references to the #name, #color, #season, and #interests elements

let nameSpan = document.querySelector('#name');
let colorSpan = document.querySelector('#color');
let seasonSpan = document.querySelector('#season')
let interestUL = document.querySelector('#interests');

// 2. Set the `innerText` of the #name, #color, and #season elements to their corresponding collected values

nameSpan.innerText = name;
colorSpan.innerText = color;
seasonSpan.innerText = season;

// Create a string to hold HTML

let interestHTML = '';

// 3. Use a for-loop and the `innerText` property to create a string of li tags containing each collected intererst

for (let i = 0; i < interests.length; i++) {
    const interest = interests[i];
    interestHTML += `<li>${interest}</li>`;
}

// Insert the string of interest li tags inside of the #interests element

interestUL.innerHTML = interestHTML;