import React, { Component } from "react";
import { trialArray } from "./trial.js";

const localrial = trialArray;

class trial extends Component {
  render() {
    return (
      <div>
        <h1>Electric Charger Locator</h1>
        <select>
          <option selected disabled="true">
            ..Search by Country..
          </option>
          {trialArray.map((option) => (
            <option country={option.country}>{option.country}</option>
          ))}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <select>
          <option selected disabled="true">
            ..Search by City..
          </option>
          {localrial.map((option) => (
            <option country={option.country}>{option.city}</option>
          ))}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <select>
          <option selected disabled="true">
            ..Search by Connector type..
          </option>
          {trialArray.map((option) => (
            <option country={option.country}>{option.connector}</option>
          ))}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    );
  }
}

export default trial;
