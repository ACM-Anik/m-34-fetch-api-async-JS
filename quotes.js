

const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    // console.log(quote);
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = `
    <p>Kanye West's random quotes:</p>
    <h4>${quote.quote}.</h4>
    `;
}

loadQuote();