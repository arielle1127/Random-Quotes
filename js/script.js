/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



const main = document.querySelector('main');
let quoteBox = document.getElementById('quote-box'); //returns complete HTML string of quotes, source, citations, etc


const quotes = [       //array of quotes to be printed to page
  {
    quote: 'If your compassion does not include yourself, it is incomplete.',
    source: 'Jack Kornfield',
    citation: 'Buddha’s Little Instruction Book',
    year: 1994
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
    source:'Antoine de Saint-Exupery',
    bio: 'French aviator and author',
    year: '1900-1944'
  },
  {
    quote: 'Emotions are like waves. Watch them disappear in the distance on the vast calm ocean.',
    source:'Ram Dass',
    citation: 'Be Here Now',
    year: 1971
  },
  {
    quote: 'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
    source:'Rumi',
    year: '1207-1241'
  } 
]; 

console.log(quotes);


/*   getRandomQuote() function generates random quote from array 
     randomNumber generates random index from array
     randomQuote returns quote, source, citation, etc from random index
*/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    console.log(randomQuote);
    return randomQuote;
}
getRandomQuote();

/*  printQuote() function prints randomQuote to page
    randomquoteObj calls getRandomQuote() function to generate a random quote
    First two lines of html prints quote and source of randomquoteObj 
    If randomquoteObj contains a citation, bio, or year it prints that 
    quoteBox.innerHTML calls quoteBox variable to print entire HTML string
*/ 

function printQuote() {
    let randomquoteObj = getRandomQuote();
    let html = `<p class="quote">${randomquoteObj.quote}</p>
                <p class="source">${randomquoteObj.source}`;
      if ('citation' in randomquoteObj) {
          html += `<span class="citation">${randomquoteObj.citation}</span>`;
             }
      if ('bio' in randomquoteObj) {
            html += `, <span class="bio">${randomquoteObj.bio}</span>`;
               }
      if ('year' in randomquoteObj) {
              html += `<span class="year">${randomquoteObj.year}</span> </p>`;
           }           
     quoteBox.innerHTML = html;
}
printQuote();


/* 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/ 

document.getElementById('load-quote').addEventListener("click", printQuote, false);