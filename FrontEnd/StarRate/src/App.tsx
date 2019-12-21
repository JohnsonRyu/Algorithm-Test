import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import { StarRate } from "./StarRate";

@observer
export class App extends Component {
  @observable value = 0;

  @action
  handleChange = value => {
    this.value = value;
  };

  render() {
    return (
      <div>
        <StarRate value={this.value} handleChange={this.handleChange} />
      </div>
    );
  }
}
