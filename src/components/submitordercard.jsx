import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

class SubmitOrderCard extends Component {
  state = {
    isMarket: false,
  };
  render() {
    const cardStyle = {
      width: "50vh",
      height: "45vh",
    };

    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "75vh",
    };
    const formClasses = "mb-3";
    const submitButtonStyles = {
      float: "right",
    };

    return (
      <React.Fragment>
        <div className="d-flex flex-row mx-4" style={containerStyle}>
          <Card className="mx-5" style={cardStyle}>
            <Card.Body>
              <Card.Title className="p-1">
                <h3>
                  <Badge pill bg="warning">
                    Buy
                  </Badge>
                </h3>
              </Card.Title>
              <Form>
                <Form.Group
                  className={formClasses}
                  controlId="formBuyMarketOrderPrice"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
                    placeholder="Enter Price"
                  />
                  <Form.Text className="text-muted">
                    Please enter the price you want to trade.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className={formClasses}
                  controlId="formBuyMarketOrderAmount"
                >
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
                    placeholder="Enter Amount"
                  />
                  <Form.Text className="text-muted">
                    Please enter the amount you want to trade.
                  </Form.Text>
                </Form.Group>
                <Button
                  className="text-white"
                  style={submitButtonStyles}
                  variant="info"
                  type="submit"
                >
                  <b>Submit</b>
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mx-5" style={cardStyle}>
            <Card.Body>
              <Card.Title className="p-1">
                <h3>
                  <Badge pill bg="success">
                    Sell
                  </Badge>
                </h3>
              </Card.Title>
              <Form>
                <Form.Group
                  className={formClasses}
                  controlId="formSellMarketOrderPrice"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
                    placeholder="Enter Price"
                  />
                  <Form.Text className="text-muted">
                    Please enter the price you want to trade.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className={formClasses}
                  controlId="formSellMarketOrderAmount"
                >
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
                    placeholder="Enter Amount"
                  />
                  <Form.Text className="text-muted">
                    Please enter the amount you want to trade.
                  </Form.Text>
                </Form.Group>
                <Button
                  className="text-white"
                  style={submitButtonStyles}
                  variant="info"
                  type="submit"
                >
                  <b>Submit</b>
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default SubmitOrderCard;
