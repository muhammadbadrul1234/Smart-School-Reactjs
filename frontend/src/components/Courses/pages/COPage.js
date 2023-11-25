import React from 'react';
import Hero from "../Hero";
import CoursesList from "../CourseList";
import CategoriesList from "../CategoriesList";
import Sidebar from "../Sidebar";
import Header from '../../Login/Header/Header';
import Footer from '../../Homepage/Footer/Footer';



const COPage = () => {
  return (
    <div className="holder">

      <Header/>
      <Hero />
      <CoursesList />
      <CategoriesList />
      <Footer/>
    </div>
  );
}

export default COPage;