const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


// show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}


// Hide loading
function complete() {
    if(!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

let apiQuotes = [];

// show new quote
const newQuote = () => {
    index = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[index];
    // check if author field is blank
    if (!quote.author) {
        authorText.textContent = '~ Unkown ~';
    } else {
        authorText.textContent = quote.author;
    }
    // check quote length to determine styling
    if (quote.text.length > 80) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

/* 
Get Quote from API 
API Home Page https://quotes-react.netlify.app/
API Github https://github.com/ssokurenko/quotes-react-app
*/
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes  = await response.json();
        newQuote();
        complete();
    } catch(error) {
        alert('Something went wrong!' + error);
        getQuotes();
    }
}

// tweet quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On load
getQuotes();