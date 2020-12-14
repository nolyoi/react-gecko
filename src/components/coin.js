import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

function Coin() {
  let { coinId } = useParams();
  const [ coin, setCoin ] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then(results => results.json())
      .then(data => {
        if (data != null) {
          setCoin(data);
        }
      });
  }, [coinId]);

  return (
  <div className="col-6">
    <h3>Requested topic ID: {coinId}</h3>
    <p>{coin.description?.en}</p>
  </div>
  );
}

export default Coin;