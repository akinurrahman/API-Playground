import React, { useEffect, useState } from "react";
import style from './quotes.module.css'
const Quotes = () => {
 
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("success");


  const getQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "sVcGBbHU9VYsGDnNzW7q1NF7BJBiPJibPZwsL8v1",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  return (
    <div>
      {quotes.map((currQuote) => {
        return (
          <div className={style.container} key={currQuote.quote}>
            <h1>Random Quote Generator</h1>

            <div className={style['category-select']}>
              <label htmlFor="category">Select a Category: </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="age">Age</option>
                <option value="alone">Alone</option>
                <option value="amazing">amazing</option>
                <option value="anger">anger</option>
                <option value="architecture">architecture</option>
                <option value="art">art</option>
                <option value="success">success</option>
                <option value="movies">movies</option>
                <option value="money">money</option>
                <option value="learning">learning</option>
                <option value="knowledge">knowledge</option>
                <option value="intelligence">intelligence</option>
                <option value="government">government</option>
                <option value="future">future</option>
                <option value="friendship">friendship</option>
                <option value="family">family</option>
                <option value="failure">failure</option>
                <option value="education">education</option>
                <option value="dreams">dreams</option>
                <option value="business">business</option>
              </select>
            </div>

            <div className={style['quote-container']}>
              <p className={style['quote-text']}>{currQuote.quote}</p>
              <p className={style['quote-author']}>- {currQuote.author}</p>
              <p>
                {isLoading && (
                  <img className={style['loading-gif']} src="./giphy.gif" alt="gif" />
                )}
              </p>
            </div>
            <button className={style['new-quote-button']} onClick={getQuote}>
              New Quote
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
