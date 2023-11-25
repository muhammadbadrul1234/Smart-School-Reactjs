import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Welcome Here and <br /> Let's go to fullfill your goal
              </h2>
              <p className="mb-5" style={{ textAlign: 'justify' }}>
              Education our Aim for our better life

What is the famous definition of education? Definition of Education by Different Authors – ExamPlanning Education is defined as a learning process for the individual to attain knowledge and understanding of the higher specific objects and specific. The knowledge gained formally resulting individual has a pattern of thought and behavior in accordance with the education they have gained.
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
