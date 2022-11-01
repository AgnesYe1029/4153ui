import React from "react";
import { Row } from "react-bootstrap";

const Spacing = ({ numOfRows }) => {
  let rows = [];
  for (let i = 0; i < numOfRows; i++) {
    rows.push(
      <Row>
        <span>&nbsp;&nbsp;</span>
      </Row>
    );
  }
  return <div>{rows}</div>;
};

export default Spacing;
