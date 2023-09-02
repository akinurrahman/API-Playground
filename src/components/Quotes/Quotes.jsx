import React, { useEffect, useState } from "react";
import "./quotes.css"
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

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
      setQuotes(data[0]);
    } catch (error) {
      console.error("Error is -- :", error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getQuote();
    document.title = "Random Quotes - API Playground";
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const { quote, author } = quotes;
  return (
    <section className="container">

     

      <div className="sub-container">
      <div className="category-quote-select">
        
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="select-quote-category"
          
        >
          <option value="">Choose category</option>
          <option value="success">success</option>
          <option value="movies">movies</option>
          <option value="money">money</option>
          <option value="learning">learning</option>
          <option value="intelligence">intelligence</option>
          <option value="future">future</option>
          <option value="friendship">friendship</option>
          <option value="family">family</option>
          <option value="failure">failure</option>
          <option value="education">education</option>
          <option value="dreams">dreams</option>
          <option value="business">business</option>
        </select>
      </div>
      <h1 className="title">Random Quote Generator</h1>
        <p className="content">{quote}</p>
        <p className="quote-author">- {author}</p>
        <p>
          {isLoading && (
            <img className="loading-gif" src="./giphy.gif" alt="gif" />
          )}
        </p>
      </div>
      <button className="next-button" onClick={getQuote}>
        New Quote
      </button>
    </section>
  );
};

export default Quotes;
