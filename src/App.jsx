import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons"
import {faSquareTumblr} from "@fortawesome/free-brands-svg-icons"



import './App.css'

const quoteList = [
  {
    author: "Norman Vincent Peale",
    text:"Change your thoughts and you change your world."
  },
  {
    author: "George Eliot",
    text:"It is never too late to be what you might have been."
  },
  {
    author: "Marie Curie",
    text:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."
  }
]

function App() {
  
const [quote, setQuote] = useState({text:"", author:""});

useEffect( () => {
  fetchQuote();
}, [])

function fetchQuote() {
  const randomIndex = Math.floor(Math.random()*quoteList.length);
 const randomQuote = quoteList[randomIndex]
 setQuote(randomQuote)
}




  return (
    <div id="quote-box">
      
    
     <h2 id="text">{quote.text}</h2>
     <h2 id="author"> - {quote.author}</h2>
     <footer>
     <button id="new-quote" onClick={fetchQuote}>New Quote</button>
     
     <a id="tweet-quote" href="http://twitter.com/intent/tweet"><FontAwesomeIcon icon={faSquareXTwitter} size="2xl" /></a>
     <a id="tumbrl-quote" href="https://www.tumblr.com/"><FontAwesomeIcon icon={faSquareTumblr} size="2xl" /></a>
     </footer>
    </div>
  )
}

export default App
