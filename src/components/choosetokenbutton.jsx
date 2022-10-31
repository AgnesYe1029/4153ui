import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

class ChooseTokenButton extends Component {
  state = {
    isMarket: false,
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
    return (
      <React.Fragment>
        <div>please {this.getPrompts()}</div>
        <Dropdown>
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
