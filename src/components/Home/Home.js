import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import About from "../About/About";
import Particle from "../Particle";
import Home2 from "./Home2";
import Project from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";

function Home() {
  return (
    <div>
      <div id="home">
        <section>
          <Container fluid className="home-section" id="home">
            <Particle />
            <Container className="home-content">
              <Row>
                <Col md={7} className="home-header">
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>

                  <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> Pujan Shrestha</strong>
                  </h1>
                  <h1 className="heading-name">
                    <strong className="main-name">
                      React & Springboot Developer. Please take a look around!
                    </strong>
                  </h1>
                </Col>

                <Col md={5} style={{ paddingBottom: 20 }}>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                </Col>
              </Row>
            </Container>
          </Container>
          <Home2 />
        </section>
      </div>
      <div id="about">
        <section>
          <About />
        </section>
      </div>
      <div id="project">
        <section>
          <Project />
        </section>
      </div>
      <div id="resume">
        <section>
          <Resume />
        </section>
      </div>
    </div>
  );
}

export default Home;
