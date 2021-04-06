/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array n this step, you're creating a variable, naming it 'quotes',
 *  setting it equal to an empty array, and then adding five empty, comma separated objects to the array.
 * Add a minimum of five empty objects to your quotes array.
 
*Next, add a citation property to at least one quote object. And add a year property to at least one quote object. 
 For the value of the citation property, use the book, movie, song or magazine that the quote comes from. 
 For the value of the year property, use the year of the quote. If you don't know, you can make these values up. 
 You won't be graded on the accuracy of this information. But if you're going to be showing this project to others, 
 it would be good for the info to be as accurate as possible.

 Now that you have your array of quote objects, use the console.log() method to log out the quotes variable to see your array of quotes 
 in the Chrome DevTools' console.

If you're having trouble loading the project in Chrome, or opening the DevTools,
 be sure to check out the project study guide for resources that can help, and don’t forget about reaching out in your Slack team.
 * 
***/

const quotes = [
  {
    quote: 'If your compassion does not include yourself, it is incomplete.',
    author: 'Jack Kornfield',
    citation: 'Buddha’s Little Instruction Book'
  },
  {
    quote: 'Being at ease with not knowing is crucial for answers to come to you.',
    author:'Eckhart Tolle'
  },
  {
    quote: 'Once you stop learning, you start dying.',
    author:'Albert Einstein'
  },
  {
    quote: 'A single event can awaken within us a stranger totally unknown to us. To live is to be slowly born.',
    author:'Antoine de Saint-Exupery'
  },
  {
    quote: 'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
    author:'Rumi',
    date: 1207
  } 
]; 

console.log(quotes);

/***
 * `getRandomQuote` function
 * This function needs to accomplish three tasks: use Math.floor, Math.random and the length of the quotes array to generate a random number,
 *  use bracket notation and the random number variable to grab a quote object from the quotes array, and lastly, return the random quote object.
 *  QUESTION: MY CODE LOGS TO CONSOLE ONLY IF I DELETE RETURN RANDOMQUOTE. why? 
*/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    console.log(randomQuote);
   // return randomQuote;
}
getRandomQuote();

//***/
/***
 * `printQuote` function
 * 
 * So when the printQuote function is called, it needs to get a random quote object from the quotes array,
 *  use that random quote object to assemble a string of HTML and quote properties, and then update the HTML to include that string.

To get a random quote object, create a variable and set it equal to a call to the getRandomQuote() function.

Next create another variable and set it equal to two <p></p> elements.
 The first element should have a class equal to “quotes” and the randomQuote.quote property nested between the opening and closing tags. 
 The second element should have a class equal to “source” and the randomQuote.source property nested between the tags.*/

 
   // 1. Create a variable that calls the getRandomQuote() 
  // function

function printQuote() {

}

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  
  //= html '';

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);