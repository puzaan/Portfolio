import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectList } from "./projectList";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.map(pl => (
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pl.image}
              isBlog={pl.isBlog}
              title={pl.title}
              description={pl.description}
              link={pl.link}
            />
          </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
