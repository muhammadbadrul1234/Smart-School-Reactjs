import React, { Fragment }  from 'react'
import Header from "../components/Login/Header/Header";

import Footer from "../components/Homepage/Footer/Footer";
import ClassRoutine from '../components/ClassRoutine/CreateClassRoutine';

function AdminClassRoutine() {
  return (
    <Fragment>
        <Header />
        <ClassRoutine/>
        
        <Footer />
        
      </Fragment>
  )
}

export default AdminClassRoutine