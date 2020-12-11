import React from 'react';
import axios from 'axios';
import Coin from './coin';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class CoinList extends React.Component {
  state = {
    coins: [],
    loading: true
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000); 
  }

  getData = () => {
    this.setState({loading: true});
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
        const coins = res.data;
        this.setState({ coins });
        this.setState({loading: false});
      });
  }

  render() {
    return (
      <div>
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
        {this.state.coins.map(coin => 
          <Coin name={coin.name} price={coin.current_price} />
        )}
      </div>
    );
  };
};