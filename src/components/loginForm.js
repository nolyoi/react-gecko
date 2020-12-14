import React from 'react';
import axios from 'axios';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
`;

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    loading: true
  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:3001/api/sign-ins?";
    var payload={
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+`user:email=${payload.email}&user:password=${payload.password}`)
    .then(function (response) {
    console.log(response);
    if(response.data.code === 200){
    console.log("Login successfull");
    alert("Login successfull");
    }
    else if(response.data.code === 204){
    console.log("Username password do not match");
    alert("username password do not match");
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }

    handleChange(event) {
      this.setState({email: event.target.emai});
      this.setState({password: event.target.password});
    }


  render() {
    return (
      <div>
        <ClipLoader
          css={override}
          size={100}
          color={"#ffffff"}
          loading={this.state.loading}
        />
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" value={this.state.email}
            onChange={this.handleChange}></input>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" id="password" name="password" class="form-label" value={this.state.password}
            onChange={this.handleChange}>Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={(event) => this.handleClick(event)}>Submit</button>
        </form>
      </div>
    );
  };
};