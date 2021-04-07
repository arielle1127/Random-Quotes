/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quotes = [
  {
    quote: 'If your compassion does not include yourself, it is incomplete.',
    source: 'Jack Kornfield',
    citation: 'Buddha’s Little Instruction Book'
  },
  {
    quote: 'Being at ease with not knowing is crucial for answers to come to you.',
    source:'Eckhart Tolle'
  },
  {
    quote: 'Once you stop learning, you start dying.',
    source:'Albert Einstein'
  },
  {
    quote: 'A single event can awaken within us a stranger totally unknown to us. To live is to be slowly born.',
    source:'Antoine de Saint-Exupery'
  },
  {
    quote: 'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
    source:'Rumi',
    year: 1207
  } 
]; 

console.log(quotes);

/***
 * `getRandomQuote` function
 * use Math.floor, Math.random and the length of the quotes array to generate a random number,
 *  use bracket notation and the random number variable to grab a quote object from the quotes array, 
 * lastly, return the random quote object.
*/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    console.log(randomQuote);
    return randomQuote;
}
getRandomQuote();

/***
 * `printQuote` function 
        -used to display a new quote each time the user clicks the "Show another quote" button 
        - Create a function named printQuote.
      3 tasks: 
          1. call the getRandomQuote function
          2. use the returned quote object to build a string of HTML and quote properties
          3. then use that string to display a random quote in the browser.*/

function printQuote() {
    
}
printQuote();



/*create a variable to store a random quote object from the getRandomQuote() function.

Create another variable to store the HTML string. 
      1. Set it equal to a string containing two <p> elements. 
      2. Use this code snippet as a guide for what the HTML string should look like at this point:
            <p class="quote"> A random quote </p>
            <p class="source"> quote source </p>
The first <p> element should have a class equal to “quote”, and the random quote object’s .quote property nested between the opening and closing <p> tags.
The second <p> element should have a class equal to “source”, and the random quote object’s .source property nested between the tags.

Important Notes:
Do not include the second closing </p> tag for now – you will add it at the end of this step.
You can use template literals here if you’re comfortable with that approach. But if you use traditional strings instead, 
be sure to wrap the strings in single quotes, so that the HTML classes can use their recommended double quotes.*/


//`<p class="quote">${randomQuote}`;















//let shuffle = getRandomQuote;



//let written = <p class="quote"randomQuote.quote></p> <p class="source">randomQuote.source</p>













/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);