import React, { Fragment } from "react";
import Header from "../components/Homepage/Header/Header";
import HeroSection from "../components/Homepage/Hero-Section/HeroSection";
import CompanySection from "../components/Homepage/Company-section/Company";

import AboutUs from "../components/Homepage/About-us/AboutUs";
import Courses from "../components/Homepage/Courses-section/Courses";
import ChooseUs from "../components/Homepage/Choose-us/ChooseUs";
import Features from "../components/Homepage/Feature-section/Features";
import FreeCourse from "../components/Homepage/Free-course-section/FreeCourse";

import Testimonials from "../components/Homepage/Testimonial/Testimonials";

import Newsletter from "../components/Homepage/Newsletter/Newsletter";
import Footer from "../components/Homepage/Footer/Footer";
import Faculty from "../components/Homepage/Faculty/Faculty";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      
      <Courses />
      <FreeCourse />
      <Faculty />
      <ChooseUs />
      <AboutUs />
      <Features />
      
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
