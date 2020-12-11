import React from 'react';

const Coin = ({name, price}) => {
  return(
    <div>
      <h4> {name} - ${price} </h4>

    </div>
  );
};

export default Coin;