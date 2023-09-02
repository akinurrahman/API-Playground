import React, { useEffect, useState } from "react";

function Jokes() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const getJoke = async () => {
    setLoading(true);
    try {
      const url = `https://api.api-ninjas.com/v1/dadjokes?limit=1`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "sVcGBbHU9VYsGDnNzW7q1NF7BJBiPJibPZwsL8v1",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }

      const data = await res.json();
      if (data.length > 0) {
        setJoke(data[0].joke);
      } else {
        setJoke("No joke available");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
    setLoading(false)
  };

  useEffect(() => {
    getJoke();
    document.title = "Random Jokes - API Playground";

  }, []);

  return (
    <section className="container">
      <div className="sub-container">
      <h1 className="title">Dad Joke Generator</h1>
      <p className="content">{joke}</p>
      <p>
        {loading && (
          <img className="loading-gif" src="./giphy.gif" alt="gif" />
        )}
      </p>
      <button onClick={getJoke} className="next-button">Get Joke</button>
      </div>
    </section>
  );
}

export default Jokes;
