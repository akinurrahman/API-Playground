import React, { useEffect, useState } from "react";
import "./currency.css";

function ConvertCurrency() {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(1);
  const [newCurrency, setNewCurrency] = useState({});
  const [have, setHave] = useState("INR");
  const [want, setWant] = useState("USD");

  const convertNow = async () => {
    setLoading(true);
    try {
      const url = `https://api.api-ninjas.com/v1/convertcurrency?have=${have}&want=${want}&amount=${currency}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "sVcGBbHU9VYsGDnNzW7q1NF7BJBiPJibPZwsL8v1",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setNewCurrency(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    convertNow();
    document.title = "Currency Converator - API Playground";
  }, [currency, have, want]);

  return (
    <section
      className="container"
      style={{ maxWidth: "400px", textAlign: "start" }}
    >
      <div className="convert-currency">
        <div className="currency-select">
          <label>From {have} :</label>
          <select value={have} onChange={(e) => setHave(e.target.value)}>
            <option value="INR">INR - Indian Rupees</option>
            <option value="USD">USD - US doller</option>
            <option value="AED">UAE - Dirhams</option>
            <option value="EUR">United Kingdom - Pounds</option>
            <option value="AUD">Australia - Dollars</option>
          </select>
        </div>

        <div className="currency-input">
          <p>Amount in {have}:</p>
          <input
            type="number"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>

        <div className="currency-select">
          <label>To {want}:</label>
          <select value={want} onChange={(e) => setWant(e.target.value)}>
            <option value="INR">INR - Indian Rupees</option>
            <option value="USD">USD - US doller</option>
            <option value="AED">UAE - Dirhams</option>
            <option value="EUR">United Kingdom - Pounds</option>
            <option value="AUD">Australia - Dollars</option>
          </select>
        </div>

        <div className="currency-output">
          <p>Amount in {want} is:</p>
          <input type="number" value={newCurrency.new_amount} readOnly />
        </div>

        <p>
          {loading && (
            <img src="./giphy.gif" alt="gif" className="loading-gif" />
          )}
        </p>
      </div>
    </section>
  );
}

export default ConvertCurrency;
