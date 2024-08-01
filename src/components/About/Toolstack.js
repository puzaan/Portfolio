import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { tools } from "./AboutList";
function Toolstack() {
  const tooltipStyle = {
    color: '#fff',
    backgroundColor: '#333',
    padding: '5px',
    borderRadius: '3px',
    fontSize: '20px'
  };
  const cursorStyle = {
    cursor: 'pointer',
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} style={cursorStyle}>
          <OverlayTrigger
            placement="center"
            overlay={
              <Tooltip id={`tooltip-${index}`} style={tooltipStyle}>
                {tool.name}
              </Tooltip>
            }
          >
            {tool.icon}
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;