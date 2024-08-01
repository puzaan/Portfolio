import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { tech } from "./AboutList";
import 'bootstrap/dist/css/bootstrap.min.css';


function Techstack() {
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
      {tech.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} style={cursorStyle}>
          <OverlayTrigger
            placement="center"
            overlay={
              <Tooltip id={`tooltip-${index}`} style={tooltipStyle}>
                {tech.name}
              </Tooltip>
            }
          >
            {tech.icon}
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
