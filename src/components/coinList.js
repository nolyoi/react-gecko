import React from 'react';
import axios from 'axios';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
`;

export default class CoinList extends React.Component {
  state = {
      coins: [],
      loading: true,
      page: 1
    }
  

  componentDidMount() {
    // Call the API.
    console.log(this.state.page);
    this.getData(this.state.page);

    // Refresh API data every 5 seconds.
    setInterval(this.getData, 50000); 
  }

  getData = (page) => {
    this.setState({loading: true});
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
      .then(res => {
        const coins = res.data;
        this.setState({ coins });
        this.setState({loading: false});
      });
  }

  nextPage = () => {
    this.setState({page: this.state.page + 1},
      () => this.getData(this.state.page));
  }

  previousPage = () => {
    this.setState({page: this.state.page - 1},
      () => this.getData(this.state.page));
  }

  render() {
    let row;
    if (this.state.loading){
      row = <th><ClipLoader
      css={override}
      size={25}
      color={"#ffffff"}
      loading={this.state.loading}
    /></th>;
    }

    let prevButton;
    if (this.state.page <= 1) {
      prevButton = <button type="button" className="btn btn-primary" disabled>Prev</button>
    
    }else {
      prevButton = <button type="button" className="btn btn-primary" onClick={this.previousPage}>Prev</button>
    }

    return (
      <div>
         
      
      <table className="table">
        <thead className="table-dark">
          <tr>
            {row}
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
          {this.state.coins.map(coin => 
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td className="align-middle">
                <img src={coin.image} className="mr-2" alt="Logo" width="25" /> 
                <Link to={`/coin/${coin.id}`}>{coin.name} ({coin.symbol.toUpperCase()})</Link>
              </td>
              <td>{coin.current_price.toFixed(2)}</td>                 
            </tr> 
          )}
        </tbody>
      </table>
      {prevButton}
      <button type="button" className="btn btn-primary" onClick={this.nextPage}>Next</button>

      </div>
    );
  };
};