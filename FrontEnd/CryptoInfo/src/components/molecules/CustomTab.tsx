import React, { Component, Fragment } from "react";
import { MenuProps } from "semantic-ui-react";

import { observable } from "mobx";
import { observer } from "mobx-react";

import { Menu, MenuItem } from "../atoms/Menu";
import { ITabType } from "../../constants/interfaces";
import { IComponentProps } from "../../constants/types";
import { Container } from "../atoms/Container";

interface ICustomTabProps extends IComponentProps {
  tabs: ITabType[];
  onClick?: (name: string) => void;
}

@observer
export class CustomTab extends Component<ICustomTabProps> {
  static defaultProps = {
    onClick: () => {}
  };

  @observable activeItem = this.props.tabs[0].menuName;
  
  changeActiveItem = (name: string) => {
    this.activeItem = name;
  }

  itemOnClick = (
    _e: React.MouseEvent<HTMLAnchorElement>,
    { name }: { [key: string]: string }
  ) => {
    this.changeActiveItem(name);
    this.props.onClick!(name);
  };

  render() {
    return (
      <Container _header>
        <Menu
          pointing
          secondary
          widths={this.props.tabs.length as MenuProps["widths"]}
          fixed="top"
          _outer="compact"
        >
          {this.props.tabs.map((tab: ITabType) => (
            <MenuItem
              key={tab.menuName}
              name={tab.menuName}
              onClick={this.itemOnClick}
              _active={this.activeItem === tab.menuName}
              _inactive={this.activeItem !== tab.menuName}
              _background_color="white"

            />
          ))}
        </Menu>
        <Container _body>
          <Fragment>
          {this.props.children}
          {this.props.tabs
            .find((tab: ITabType) => this.activeItem === tab.menuName)!
            .render()}
          </Fragment>
        </Container>
      </Container>
      
    );
  }
}
