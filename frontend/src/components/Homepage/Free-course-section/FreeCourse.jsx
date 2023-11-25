import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../../assests/images/web-development.png";
import courseImg02 from "../../../assests/images/kids-learning.png";
import courseImg03 from "../../../assests/images/seo.png";
import courseImg04 from "../../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "05",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "06",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "07",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "08",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  
  return (
    <section>
      <Container>
        <Row>
        <Col lg="12" className="text-center mb-20" style={{ padding: '20px' }}>
            <h2 className="fw-bold">Other Courses</h2>
          </Col>
  
          <Slider dots={false} arrows={false} slidesToShow={2} slidesToScroll={1} autoplay={true} autoplaySpeed={1000} className="mb-1">
            {freeCourseData.map((item) => (
              <Col lg="10" md="10" key={item.id} style={{ marginRight: '40px' }}>
                <FreeCourseCard item={item} />
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
  
      <Container className="mt-10">
        <Row>
          <Col lg="12" className="text-center mb-5">
            {/* Add your content for the second section */}
          </Col>
  
          <Slider dots={true} arrows={true} slidesToShow={4} slidesToScroll={1} autoplay={true} autoplaySpeed={2000} className="mb-4">
            {freeCourseData.map((item) => (
              <Col lg="4" md="6" key={item.id} style={{ marginRight: '4px' }}>
                <FreeCourseCard item={item} />
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
      {/* Button at the end */}
      <div className="d-flex justify-content-center mt-4">
      <button className="btn" style={{ width: '200px' }}>Explore More</button>
    </div>
    </section>
  );
  
  
  
  
  
  
};

export default FreeCourse;
