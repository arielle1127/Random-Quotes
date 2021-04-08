/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const main = document.querySelector('main');

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


function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    console.log(randomQuote);
    return randomQuote;
}
getRandomQuote();

//I can only get the html to work when i put the document.getelementByID inside the function.
//It wasn't working outside the function because the html variable was in the scope of the function
//Is this right or is there a better way?

function printQuote() {
    let randomquoteObj = getRandomQuote();
    let html = `<p class="quote">${randomquoteObj.quote}</p>
                <p class="source">${randomquoteObj.source}<p>`;
      document.getElementById('quote-box').innerHTML = html;
}
printQuote();




 
/* 

Create two separate if statements below the variables. You will need to add decision making to this function:
Use an if statement to check if the citation property exists, and if it does, concatenate a <span></span> element, appropriate className, and citation property to the HTML string
* If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.

 Use an if statement to check of the year property exists, and if it does, concatenate a <span></span> element, appropriate className, and year property to the HTML 
 If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string.
 
 After the two if statements, concatenate the closing </p> tag to the HTML string
set the innerHTML of the quote-box div to equal the complete HTML string*/ 


if () {

};


 

/*Use the following code snippet as a guide for what the HTML string should look like with the added "citation" and "year" <span> elements 
(like earlier, omit the second closing </p> tag for now):


<p class="quote"> A random quote </p>
<p class="source"> quote source
  <span class="citation"> quote citation </span>
  <span class="year"> quote year </span>
</p>

Below the if statements, complete the string by concatenating a closing </p> tag to the HTML string.
 This is the closing tag for the second paragraph with the class source.

Lastly, set the printQuote function to return the full HTML string displaying a random quote.




/* 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/ 

document.getElementById('load-quote').addEventListener("click", printQuote, false);