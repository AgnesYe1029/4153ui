import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Spacing from "./spacing";

class ChooseTokenButton extends Component {
  state = {
    isMarket: true,
    tokenChosen: "TokenA",
  };

  constructor(props) {
    super(props);
    this.state.isMarket = this.props.isMarket;
  }

  getPrompts() {
    const prefix = "select token - ";
    const debug = this.state.isMarket
      ? prefix + "Market Tokens"
      : prefix + "Limit Tokens";
    return debug;
  }

  render() {
    const centerStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <React.Fragment>
        <div style={centerStyles}>please {this.getPrompts()}</div>
        <Spacing numOfRows={1}></Spacing>
        <Dropdown style={centerStyles}>
          <Dropdown.Toggle
            id="choose-token-dropdown"
            variant="secondary"
            size="lg"
          >
            {this.state.tokenChosen}
          </Dropdown.Toggle>
          <DropdownMenu variant="dark">
            <Dropdown.Item
              id="tokenA"
              href="#"
              onClick={() => this.setState({ tokenChosen: "TokenA" })}
            >
              TokenA
            </Dropdown.Item>
            <Dropdown.Item
              id="tokenB"
              href="#"
              onClick={() => this.setState({ tokenChosen: "TokenB" })}
            >
              TokenB
            </Dropdown.Item>
            <Dropdown.Item
              id="tokenC"
              href="#"
              onClick={() => this.setState({ tokenChosen: "TokenC" })}
            >
              TokenC
            </Dropdown.Item>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default ChooseTokenButton;
