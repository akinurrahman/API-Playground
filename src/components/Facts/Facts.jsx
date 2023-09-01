import React, { useEffect, useState } from "react";

function Facts() {
  const [fact ,setFact]= useState("")
  const getFacts = async () => {
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
  };
  useEffect(() => {
    getFacts();
  }, []);
  return <div>fact compnents {fact}</div>;
}

export default Facts;
