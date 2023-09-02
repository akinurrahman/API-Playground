import React, { useEffect, useState } from "react";

function Facts() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const getFacts = async () => {
    setLoading(true);
    try {
      const url = `https://api.api-ninjas.com/v1/facts?limit=1`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "sVcGBbHU9VYsGDnNzW7q1NF7BJBiPJibPZwsL8v1",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setFact(data[0] ? data[0].fact : "No fact available");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleNextFact = () => {
    getFacts();
  };

  useEffect(() => {
    getFacts();
    document.title = "Random Facts - API Playground";

  }, []);

  return (
    <section className="container">
      <div className="sub-container">
        <h1 className="title">Random Fact Generator</h1>
        <p className="content">{fact}</p>
        <p>
          {loading && (
            <img className="loading-gif" src="./giphy.gif" alt="gif" />
          )}
        </p>
        <button className="next-button" onClick={handleNextFact}>
          Next Fact
        </button>
      </div>
    </section>
  );
}

export default Facts;
