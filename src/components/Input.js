import React, { Component } from "react";
import Alert from "./Alert.js";
import { fetchAddress } from "../services/fetchAddress";
import "../styles/center.css";

class Input extends Component {
  state = {
    postalCode: "",
    address: "",
  };

  handleUserInput = async (e) => {
    if (e.key === "Enter") {
      const address = await fetchAddress(this.state.postalCode);
      this.setState({ address });
    }
  };

  handleInputChange = (e) => {
    this.setState({
      postalCode: e.currentTarget.value,
    });
  };

  render() {
    const { address, postalCode } = this.state;
    return (
      <>
        <div className="start">
          <div className="centertext">
            <label for="inputPassword6" className="col-form-label">
              Enter your postal code
            </label>
          </div>
          <div className="centertext">
            <input
              id="inputPostal"
              name="postal"
              maxLength="6"
              className="postal"
              value={postalCode}
              onChange={this.handleInputChange}
              onKeyPress={this.handleUserInput}
            ></input>
          </div>
          {address && <Alert message={address} />}
        </div>
      </>
    );
  }
}

export default Input;
