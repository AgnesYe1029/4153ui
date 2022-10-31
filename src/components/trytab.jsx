import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ChooseTokenButton from "./choosetokenbutton";

class TryTab extends Component {
  render() {
    return (
      <Tabs
        defaultActiveKey="market"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="market" title="Market Order">
          <ChooseTokenButton isMarket={true} />
        </Tab>
        <Tab eventKey="limit" title="Limit Order">
          <ChooseTokenButton isMarket={false} />
        </Tab>
      </Tabs>
    );
  }
}

export default TryTab;
