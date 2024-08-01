import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <h2>Assignment by "TheGoodGame Theory"</h2>
      <div className="container">
        <div className="card">
          <p className="quote">{quote}</p>
          <button className="button" onClick={fetchQuote}>Get New Quote</button>
          <button className="button" onClick={saveQuote}>Save Quote</button>
        </div>
        <div className="savedQuotesContainer">
          <h3>Saved Quotes</h3>
          {savedQuotes.map((savedQuote, index) => (
            <div key={index} className="savedQuoteCard">
              <p>{savedQuote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
