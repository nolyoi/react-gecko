import React from 'react';

const Coin = ({name, price, rank}) => {
  return(
    <tr>
      <td> {rank} </td>
      <td> {name} </td>
      <td>${price.toFixed(2)} </td>
    </tr>
  );
};

export default Coin;