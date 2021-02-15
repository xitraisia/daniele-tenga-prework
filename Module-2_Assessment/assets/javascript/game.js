function updateBoard(){
    tracker.innerHTML = 'You have ' + limitedGuess + ' left';
    letters.innerHTML = 'word: ';
    for(let i=0; i < answerArray.length; i++){
        letters.innerHTML=letters.innerHTML+ ' ' + answerArray[i];
    }
}

//choosing random words so I created a variable that was an array of strings of words and then I created another variable that would randomly select a string in the array **dont forget Math.random and Math.floor to pick a random word from the array
let words = ['ballet','barndance','bellydance','conga','disco','foxtrot','iceskating','krumpdance'];
let word = words[Math.floor(Math.random() * words.length)];
let remainingLetters = word.length;
let limitedGuess = 10;

tracker = document.getElementById("tracker");
letters = document.getElementById("letters");
guesses = document.getElementById("guesses");
hint = document.getElementById("hint");

hint.src = 'assets/images/' + word+ '.jpeg';
let answerArray = [];
for (let i = 0; i < word.length; i++){
    answerArray[i] = '_';
}

updateBoard();

window.addEventListener("keydown", function(event) {
    if(limitedGuess === 0){
        alert("Sorry! The answer was " + word);
        return;
    }
    let guess = event.key;
    let matches = 0;
    for (let j =0; j < word.length; j++){
        if(word[j] === guess ){
            if(answerArray === '_'){
                answerArray[j] = guess;
                remainingLetters--;
                matches++;
            }
        }
    }
    if( matches === 0){
        limitedGuess--;
        if(limitedGuess === 0){
            alert("Sorry! The answer was " + word);
        }
    }
    if(remainingLetters === 0){
        alert("Good job! The answer was " + word);
    }
    guesses.innerHTML = guesses.innerHTML + ' ' + guess
    updateBoard();
}, true);




