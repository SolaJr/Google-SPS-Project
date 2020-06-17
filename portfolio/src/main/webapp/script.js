// Copyright 2019 Google LLC
//


function getNewName() {
  console.log('Fetching a new name.');
  const responsePromise = fetch('/new-name');
  responsePromise.then(handleResponse);
}

function getComments() {
  console.log('Fetching a new comment.');
  const responsePromise = fetch('/text');
  responsePromise.then(handleResponseComments);
}
function handleResponseComments(response) {
  console.log('Handling the response.');
  const textPromise = response.text();
  textPromise.then(addQuoteToDom_Comments);
}
function addQuoteToDom_Comments(comm) {
  console.log('Feedback- ' + comm);
  const comContainer = document.getElementById('comments-container');
  comContainer.innerText = comm;
}



function handleResponse(response) {
  console.log('Handling the response.');
  const textPromise = response.text();
  textPromise.then(addQuoteToDom);
}

/** Adds a random title to the file */
function addQuoteToDom(quote) {
  console.log('Adding new random title: ' + quote);
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
 
function getRandomQuoteUsingArrowFunctions() {
  fetch('/random-quote').then(response => response.text()).then((quote) => {
    document.getElementById('quote-container').innerText = quote;
  });
}

async function getRandomQuoteUsingAsyncAwait() {
  const response = await fetch('/random-quote');
  const quote = await response.text();
  document.getElementById('quote-container').innerText = quote;
}
//Lesson 3- ------------------JSON

/**
 * LESSON 3 - JSON files
 
function lessonJSON(){
const myObject = document.getElementById('comment-server');

fetch('/data')  // sends a request to /my-data-url
.then(response => response.json()) // parses the response as JSON
.then((myObject) => { // now we can reference the fields in myObject!
  console.log(myObject.x);
  console.log(myObject.y);
  console.log(myObject.z);
});

return response.json; 
}*/
 
function getServerStats() {
  fetch('/server-stats').then(response => response.json()).then((stats) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('server-stats-container');
    statsListElement.innerHTML = '';

    statsListElement.appendChild(
        createListElement('Name: ' + stats.name));
    statsListElement.appendChild(
        createListElement('Time: ' + stats.time));
    statsListElement.appendChild(
        createListElement('Comment' + stats.comment));
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}




function greetingTest() {
    
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
