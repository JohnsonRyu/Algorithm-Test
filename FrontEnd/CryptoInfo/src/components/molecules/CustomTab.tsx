import React, { Component } from "react";

import { Menu, MenuItem } from "../atoms/Menu";

export class CustomTab extends Component {
  render() {
    return (
      <Menu
        pointing
        secondary
        widths={2}
      >
          <MenuItem name="KRW" />
          <MenuItem name="USDC" />
      </Menu>
    );
  }
}
