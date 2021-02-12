const myFunction = function(event) {
  console.log('Hooray!!')

// Challenge

// Add an element in your HTML with an id of display and update this element's text when 
//the event listener is triggered.

  document.querySelector('#display').innerText = 'I did it!';
}

// Use `document.querySelector()` to obtain a reference to the `#test` element.

let testspan = document.querySelector('#test');

// Add an event listener that triggers `myFunction` when the mouse enters the `#test` element.

const myFunction = function (testspan) {
  console.log(testspan);
}

document.addEventListener(myFunction);


