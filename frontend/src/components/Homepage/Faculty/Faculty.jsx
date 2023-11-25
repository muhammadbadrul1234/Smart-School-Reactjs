import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import FacImg1 from "../../../assests/facultyimg/1.jpg";
import FacImg2 from "../../../assests/facultyimg/2.jpg";
import FacImg3 from "../../../assests/facultyimg/3.jpg";
import FacImg4 from "../../../assests/facultyimg/4.jpg";
import FacImg5 from "../../../assests/facultyimg/5.jpg";
import FacImg6 from "../../../assests/facultyimg/6.jpg";

import "./faculty.css";
import FacultyCard from "./FacultyCard";


const FacultyData = [
  {
    id: "01",
    title: "Adam Caulton",
    lesson: 12,
    students: 12.5,
    rating: 'M.SC, PHD',
    imgUrl: FacImg1,
  },

  {
    id: "02",
    title: "Baccelli",
    lesson: 12,
    students: 12.5,
    rating: 'M.SC in Computer Science',
    imgUrl: FacImg2,
  },

  {
    id: "03",
    title: "Bobzien",
    lesson: 12,
    students: 12.5,
    rating: 'B.Sc in Data Science',
    imgUrl: FacImg3,
  },
  {
    id: "06",
    title: "Catharine",
    lesson: 12,
    students: 12.5,
    rating: 'PhD in Philosophy',
    imgUrl: FacImg4,
  },

  {
    id: "05",
    title: "Bown",
    lesson: 12,
    students: 12.5,
    rating: 'Master in Web Development',
    imgUrl: FacImg5,
  },

  {
    id: "04",
    title: "Alexander",
    lesson: 12,
    students: 12.5,
    rating: 'CCNA, CCNP, CCIE',
    imgUrl: FacImg6,
  },
];

const Faculty = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to the "/about" page
    navigate('/about');
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Teachers</h2>
                
              </div>

              
            </div>
          </Col>
          {FacultyData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <FacultyCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Faculty;
