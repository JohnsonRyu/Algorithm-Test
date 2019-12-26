import React, { Component } from "react";
import { MenuProps } from "semantic-ui-react";

import { observable } from "mobx";
import { observer } from "mobx-react";

import { Menu, MenuItem } from "../atoms/Menu";
import { ITabType } from "../../constants/interfaces";


interface ICustomTabProps {
  tabs: ITabType[];
}

@observer
export class CustomTab extends Component<ICustomTabProps> {
  @observable activeItem = this.props.tabs[0].menuName;
  
  changeActiveItem = (name: string) => {
    this.activeItem = name;
  }

  itemOnClick = (
    _e: React.MouseEvent<HTMLAnchorElement>,
    { name }: { [key: string]: string }
  ) => {
    this.changeActiveItem(name);
  };

  render() {
    return (
      <div>
        <Menu
          pointing
          secondary
          widths={this.props.tabs.length as MenuProps["widths"]}
        >
          {this.props.tabs.map((tab: ITabType) => (
            <MenuItem
              key={tab.menuName}
              name={tab.menuName}
              _active={this.activeItem === tab.menuName}
              onClick={this.itemOnClick}
            />
          ))}
        </Menu>
        {this.props.tabs
          .find((tab: ITabType) => this.activeItem === tab.menuName)!
          .render()}
      </div>
      
    );
  }
}
