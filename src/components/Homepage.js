import React, { Component } from "react";
import Alert from "./Alert.js";
import { fetchAddress, fetchHawker } from "../services/fetchAddress";
import AppInput from "./common/AppInput.js";
import "./Homepage.css";
import { Helmet } from "react-helmet";
import { distance, getLat, getLng } from "../services/calcDist";
import DisplayCard from "./common/DisplayCard";

class Homepage extends Component {
  state = {
    postalCode: "",
    address: "",
    nearby: [],
  };

  handleUserInput = async (e) => {
    if (e.key === "Enter") {
      const address = await fetchAddress(this.state.postalCode);
      const hawkers = await fetchHawker();
      const addressLat = address.LATITUDE;
      const addressLng = address.LONGTITUDE;
      let nearby = [];
      for (let i = 0; i < hawkers.length; i++) {
        const dist = distance(
          addressLat,
          addressLng,
          getLat(hawkers, i),
          getLng(hawkers, i),
          "K"
        );
        nearby.push({ name: hawkers[i], distance: dist });
      }
      nearby.sort((a, b) => a.distance - b.distance);
      nearby = nearby.slice(0, 4);

      this.setState({ address: address.ADDRESS, nearby });
      console.log(nearby);
    }
  };

  handleInputChange = (e) => {
    this.setState({
      postalCode: e.currentTarget.value,
    });
  };

  render() {
    const { address, postalCode, nearby } = this.state;
    console.log(nearby);
    return (
      <div className="home-page">
        <Helmet>
          <style>{"body { background-color: #eeebe1; }"}</style>
        </Helmet>
        <div className="input">
          <label className="col-form-label">Enter your postal code</label>
          <AppInput
            maxLength={6}
            placeholder="E.g. 123456"
            value={postalCode}
            onChange={this.handleInputChange}
            onKeyPress={this.handleUserInput}
          />
        </div>
        {address && <Alert message={address} />}
        <div className="row">
          {nearby.length !== 0 &&
            nearby.map((hawker) => (
              <div
                className="col-lg-3
               d-flex align-items-stretch"
              >
                <DisplayCard hawker={hawker.name} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Homepage;
