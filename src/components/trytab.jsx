import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ChooseTokenButton from "./choosetokenbutton";
import SubmitOrderCard from "./submitordercard";
import Spacing from "./spacing";

class TryTab extends Component {
  render() {
    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <React.Fragment>
        <div className="d-flex flex-column m-5" style={containerStyle}>
          <Card bg="light" className="m-3">
            <Card.Body>
              <Tabs
                defaultActiveKey="market"
                transition={false}
                id="order-type-tab"
                className="m-0"
              >
                <Tab eventKey="market" title="Market Order">
                  <Spacing numOfRows={2}></Spacing>
                  <ChooseTokenButton isMarket={true} />
                  <div>
                    <SubmitOrderCard></SubmitOrderCard>
                  </div>
                </Tab>
                <Tab eventKey="limit" title="Limit Order">
                  <Spacing numOfRows={2}></Spacing>
                  <ChooseTokenButton isMarket={false} />
                  <div>
                    <SubmitOrderCard></SubmitOrderCard>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default TryTab;
