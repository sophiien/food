import React, { Component } from "react";
import FormInput from "./common/FormInput";
import {
  saveContributor,
  getContributors,
} from "../services/contributorService";
import "../styles/ContributeForm.css";
import { fetchAddress } from "../services/fetchAddress";

const initialDetails = { hawkerName: "", postalCode: "", recommendations: "" };

class ContributeForm extends Component {
  state = {
    details: initialDetails,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    saveContributor(
      this.state.details.hawkerName,
      this.state.details.postalCode,
      this.state.details.recommendations
    );

    console.log(getContributors());
    this.setState({ details: initialDetails });
  };

  handleChange = (e) => {
    const details = { ...this.state.details };
    details[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ details });
  };

  handlePostalCode = async (postalCode) => {
    const address = await fetchAddress(postalCode);
    return address.ADDRESS;
  };

  render() {
    const { details } = this.state;
    // const address = this.handlePostalCode(details.postalCode).toString();
    return (
      <div className="main-form">
        <h1>Contribute</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Hawker Name"
            // @ts-ignore
            name="hawkerName"
            onChange={this.handleChange}
            value={details.hawkerName}
          />
          <FormInput
            label="Postal Code"
            // @ts-ignore
            name="postalCode"
            onChange={this.handleChange}
            value={details.postalCode}
            maxLength={6}
          />
          {/* <input type="text" value={address} /> */}
          <FormInput
            label="Recommendations"
            // @ts-ignore
            name="recommendations"
            onChange={this.handleChange}
            value={details.recommendations}
          />
          <button className="btn btn-primary" style={{ marginTop: "20px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContributeForm;
